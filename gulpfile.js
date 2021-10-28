const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass')(require('node-sass'));
const child = require('child_process');
const gutil = require('gulp-util');
const browserSync = require('browser-sync');
const sourcemaps = require('gulp-sourcemaps');
const jekyll = process.platform === 'win32' ? 'jekyll.bat':'jekyll';

// PATHS
const config = {
  dist: './_site',
  paths: {
    styles: {
      src: '_src/_sass/**/*.?(s)css'
    },
    jsFiles: [
      '_src/_scripts/jquery-2.1.1.min.js',
      '_src/_scripts/jquery.fitvids.js',
      '_src/_scripts/ap-components.min.js',
      '_src/_scripts/main.js'
    ],
    markupFiles: [
      '_src/**/*.md',
      '_src/**/*.html'
    ]
  },
  messages: {
    jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
  }
};

/**
 * provides command: `jekyll build`
 */
function jekyllBuild() {
  return child.spawn( jekyll, ['build'], {stdio: 'inherit'})
}

/**
 * style() function takes in `inputs` and 
 * provides the `output` files.
 * 
 * inputs: '_src/_sass/'
 * include files: 'node_modules/susy/sass'
 * output: '_src/assets/css/main.css'
 */
function style() {
  return gulp.src(config.paths.styles.src)
    .pipe(sourcemaps.init())
    .pipe(sass({
      includePaths: ['node_modules/susy/sass'],
      onError: browserSync.notify
    }))
    .pipe(concat('main.css'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./_src/assets/css'))
    .pipe(browserSync.reload({stream:true}));
}

/**
 * js() function takes in `inputs` and 
 * provides the `output` files.
 * 
 * inputs: '_src/_scripts/'
 * output: '_src/assets/js/bundle.min.js'
 */
 function js() {
   return gulp.src(config.paths.jsFiles)
     .pipe(concat('bundle.min.js'))
     .pipe(uglify())
     .pipe(gulp.dest('./_src/assets/js'));
 }

/**
 * This function serves the static files and 
 * provides the tooling necessary to debugging
 * generally exposed at
 * --------------------------------------
 *          UI: http://localhost:3001
 * UI External: http://localhost:3001
 * --------------------------------------
 * while, the website files will be served at
 *  --------------------------------------
 *      Local: http://localhost:3000
 *   External: http://192.168.1.100:3000
 * --------------------------------------
 * 
 * @param {*} done 
 */
function browserSyncServe(done) {
  browserSync.init({
    server: {
      baseDir: config.dist,
      serveStaticOptions: {
        extensions: ['html']
      }
    }
  })
  done();
}

/**
 * This function reloads the browser with 
 * new changes saved
 * 
 * @param {*} done 
 */
function browserSyncReload(done) {
  browserSync.reload();
  done();
}

/**
 * watch() method takes
 *   a path string, 
 *   an array of path strings,
 *   an array of glob strings as globs
 * on the filesystem.      
 */

function watch() {
  gulp.watch(config.paths.styles.src, style)
  gulp.watch(config.paths.jsFiles, js)
  gulp.watch(config.paths.markupFiles,
    gulp.series(jekyllBuild, browserSyncReload));
}

// Build
gulp.task('build', gulp.series(style, js, jekyllBuild))

// Build and serve (with incremental) for development
gulp.task('default', gulp.series(style, js, jekyllBuild, browserSyncServe, watch))
