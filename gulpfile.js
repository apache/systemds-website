const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const child = require('child_process');
const gutil = require('gulp-util');
const browserSync = require('browser-sync').create();

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
    ]
  }
};

//Sass to CSS Task
gulp.task('css', () => {
  gulp.src(config.paths.cssFiles)
  .pipe(sass())
  .pipe(concat('main.css'))
  .pipe(gulp.dest('./_src/assets/css'));
});

gulp.task('js', () => {
  gulp.src(config.paths.jsFiles)
  .pipe(concat('bundle.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('./_src/assets/js'));
});

gulp.task('jekyll', () => {
  const jekyll = child.spawn('jekyll', ['build',
    '--incremental',
    '--drafts'
  ]);

  const jekyllLogger = (buffer) => {
    buffer.toString()
      .split(/\n/)
      .forEach((message) => gutil.log('Jekyll: ' + message));
  };

  jekyll.stdout.on('data', jekyllLogger);
  jekyll.stderr.on('data', jekyllLogger);
});

gulp.task('serve', () => {
  browserSync.init({
    files: [config.dist + '/**'],
    port: 3000,
    server: {
      baseDir: config.dist
    }
  });
  gulp.watch(config.paths.cssFiles, ['css', 'jekyll']);
  gulp.watch(config.paths.jsFiles, ['js', 'jekyll']);
});

gulp.task('default', ['css', 'js', 'jekyll', 'serve']);
