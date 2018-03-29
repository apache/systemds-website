const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const child = require('child_process');
const gutil = require('gulp-util');
const browserSync = require('browser-sync');
const sourcemaps = require('gulp-sourcemaps');

// PATHS
const config = {
  dist: './_site',
  paths: {
    cssFiles: './_src/_sass/**/*.?(s)css',
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

//Sass to CSS Task
gulp.task('css', () => {
  gulp.src(config.paths.cssFiles)
      .pipe(sourcemaps.init())
      .pipe(sass({
        includePaths: ['node_modules/susy/sass']
      }).on('error', sass.logError))
      .pipe(concat('main.css'))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('./_src/assets/css'));
});

gulp.task('js', () => {
  gulp.src(config.paths.jsFiles)
      .pipe(concat('bundle.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest('./_src/assets/js'));
});

gulp.task('jekyll:build', (done) => {
  browserSync.notify(config.messages.jekyllBuild);
  const jekyll = child.spawn('jekyll', ['build', '--drafts'], {stdio: 'inherit'})
    .on('close', done);
});

gulp.task('jekyll:rebuild', ['css', 'jekyll:build'], () => {
    browserSync.reload();
});

gulp.task('browser-sync', ['css', 'jekyll:build'], () => {
  browserSync({
    server: {
      baseDir: config.dist,
      serveStaticOptions: {
        extensions: ['html']
      }
    }
  })
});

gulp.task('watch', () => {
  gulp.watch(config.paths.cssFiles, ['css', 'jekyll:build']);
  gulp.watch(config.paths.jsFiles, ['js', 'jekyll:build']);
  gulp.watch(config.paths.markupFiles, ['jekyll:build']);
});

gulp.task('default', ['browser-sync', 'watch'])
