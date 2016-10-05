const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const useref = require('gulp-useref');
const sass = require('gulp-sass');

const cssFiles = './src/sass/**/*.?(s)css';
const jsFiles = './src/js/**/*.js';

gulp.task('css', () => {
  gulp.src(cssFiles)
  .pipe(sass())
  .pipe(concat('main.css'))
  .pipe(gulp.dest('./assets/css'));
});

gulp.task('js', () => {
  gulp.src(jsFiles)
  .pipe(uglify())
  .pipe(gulp.dest('./assets/js'));
});

gulp.task('useref', () => {
  return gulp.src('./_includes/themes/apache/default.html')
  .pipe(useref())
  .pipe(gulp.dest('./assets/js'));
});

gulp.task('watch', () => {
  gulp.watch(cssFiles, ['css']);
});

gulp.task('default', ['css', 'js', 'watch']);
