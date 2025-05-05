# Avatar Downloader Plugin for Jekyll
# ==================================
#
# This plugin automates the process of downloading GitHub avatar images for 
# contributors listed in the site's data file. It downloads the images during 
# the Jekyll build process and stores them in the assets/img/avatars directory.
#
# Process Flow:
# ------------
# ```
#  +-----------------+    +------------------+    +-----------------------+
#  | Read contributor|    | For each         |    | Check if avatar exists|
#  | data from       |--->| contributor with |--->|or check ETag/Modified |
#  | site.data       |    | GitHub ID        |    | headers for changes   |
#  +-----------------+    +------------------+    +-----------------------+
#                                                            |
#                                                            v
#  +-----------------+    +------------------+    +-----------------------+
#  | Update site     |    | Save avatar      |    | Download avatar only  |
#  | configuration   |<---| to assets/img/   |<---| if changed or new     |
#  | with avatar path|    | avatars          |    | (using HTTP headers)  |
#  +-----------------+    +------------------+    +-----------------------+
# ```
#
# Benefits:
# --------
# 1. No manual downloading of avatar images required
# 2. Images stay fresh but are only downloaded when actually changed
# 3. Images are included in the built site automatically
# 4. Faster page loads since images are served from the same domain
#
# Usage:
# ------
# In templates: <img src="/assets/img/avatars/{{ github_username }}.jpg">
# The plugin automatically runs during Jekyll build process.
#
# Configuration:
# --------------
# - Requires contributor data with 'githubId' field
# - Uses HTTP ETag/Last-Modified headers to only download changed images

require 'net/http'
require 'fileutils'
require 'digest'
require 'yaml'

module Jekyll
  class AvatarDownloader < Generator
    safe true
    priority :high

    def generate(site)
      # Store avatars in the source assets directory so they're included in the build
      avatar_dir = File.join(site.source, 'assets', 'img', 'avatars')
      FileUtils.mkdir_p(avatar_dir) unless Dir.exist?(avatar_dir)
      
      # Create metadata directory for ETag/Last-Modified storage
      metadata_dir = File.join(site.source, 'assets', 'img', 'avatars', '.metadata')
      FileUtils.mkdir_p(metadata_dir) unless Dir.exist?(metadata_dir)

      # Load previous metadata if it exists
      metadata_file = File.join(metadata_dir, 'metadata.yml')
      avatar_metadata = {}
      if File.exist?(metadata_file)
        begin
          avatar_metadata = YAML.load_file(metadata_file) || {}
        rescue => e
          puts "Error loading avatar metadata: #{e.message}"
          avatar_metadata = {}
        end
      end

      # Get contributors from site data
      contributors = site.data['contributors'] || []
      
      # Download each avatar
      contributors.each do |contributor|
        next unless contributor['githubId']
        
        github_id = contributor['githubId']
        avatar_url = "https://avatars.githubusercontent.com/#{github_id}"
        local_path = File.join(avatar_dir, "#{github_id}.jpg")
        
        # Get stored ETag and Last-Modified values if they exist
        user_metadata = avatar_metadata[github_id] || {}
        stored_etag = user_metadata['etag']
        stored_last_modified = user_metadata['last_modified']
        
        download_needed = false
        headers = {}
        
        # Add conditional headers if we have previous values
        if stored_etag
          headers['If-None-Match'] = stored_etag
        end
        
        if stored_last_modified
          headers['If-Modified-Since'] = stored_last_modified
        end
        
        # Check if we need to download: file doesn't exist or we need to check if it's changed
        if !File.exist?(local_path) || stored_etag || stored_last_modified
          begin
            uri = URI(avatar_url)
            
            # Make a HEAD request first to check headers
            Net::HTTP.start(uri.host, uri.port, use_ssl: true) do |http|
              request = Net::HTTP::Head.new(uri, headers)
              response = http.request(request)
              
              case response.code
              when '200'
                # Resource changed or first download
                download_needed = true
                # Store new ETag and Last-Modified for future requests
                avatar_metadata[github_id] = {
                  'etag' => response['ETag'],
                  'last_modified' => response['Last-Modified']
                }
              when '304'
                # Resource not modified
                puts "Avatar for #{github_id} is up-to-date (HTTP 304)"
                download_needed = false
              else
                puts "Unexpected response for #{github_id}: #{response.code}"
                download_needed = false
              end
            end
            
            # Only download if needed
            if download_needed
              puts "Downloading avatar for #{github_id}..."
              Net::HTTP.start(uri.host, uri.port, use_ssl: true) do |http|
                request = Net::HTTP::Get.new(uri)
                response = http.request(request)
                
                if response.code == '200'
                  File.open(local_path, 'wb') do |file|
                    file.write(response.body)
                  end
                  puts "Avatar saved for #{github_id}"
                  
                  # Update metadata
                  avatar_metadata[github_id] = {
                    'etag' => response['ETag'],
                    'last_modified' => response['Last-Modified']
                  }
                else
                  puts "Failed to download avatar for #{github_id}: #{response.code}"
                end
              end
            end
          rescue => e
            puts "Error processing avatar for #{github_id}: #{e.message}"
          end
        end
      end
      
      # Save metadata for next build
      File.open(metadata_file, 'w') do |file|
        file.write(avatar_metadata.to_yaml)
      end
      
      # Add site.avatar_path for use in templates
      site.config['avatar_path'] = '/assets/img/avatars'
    end
  end
end