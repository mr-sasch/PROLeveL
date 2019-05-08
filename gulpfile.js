// Gulp
var gulp = require('gulp');

// Stylus
var stylus = require('gulp-stylus');
var sourcemaps = require('gulp-sourcemaps');
gulp.task('styl', function () {
  return gulp.src('app/styles/style.styl')
    .pipe(sourcemaps.init())
    .pipe(stylus())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('docs/assets/'));
});

// Pug
var pug = require('gulp-pug');
gulp.task('pug', function() {
  return gulp.src('app/pages/*.pug')
  .pipe(pug({
    pretty: true
  }))
  // .pipe(bsreload({stream:true}))
  .pipe(gulp.dest('docs/'))
});

// Watch
var watch = require('gulp-watch');
// var browserSync = require('browser-sync');
// var bsreload = browserSync.reload();



// gulp.task('bsinit', function() {
//   browserSync.init({
//       server: {
//           baseDir: "docs/",
//           index: "main.html"
//       }
//   });
// });

gulp.task('watch', function() {

  // // Serve files from the root of this project
  // browserSync.init({
  //     server: {
  //         baseDir: "docs/",
  //         index: "main.html"
  //     }
  // });

  gulp.watch('app/**/*.styl', gulp.series('styl'));
  gulp.watch('app/**/*.pug', gulp.series('pug'));

});

// ****
//
// var gulp = require('gulp'),
//    uglify = require('gulp-uglify'),
//    compass= require('gulp-compass'),
//    plumber = require('gulp-plumber'),
//    autoprefixer = require('gulp-autoprefixer'),
//    browserSync = require('browser-sync'),
//    reload = browserSync.reload,
//    rename = require('gulp-rename');
//
// gulp.task('scripts', function() {
//    gulp.src(['public/src/js/**/*.js', '!public/src/js/**/*.min.js'])
//       .pipe(plumber())
//       .pipe(rename({suffix: '.min'}))
//       .pipe(uglify())
//       .pipe(gulp.dest('public/src/js/'));
// });
//
// gulp.task('styles', function() {
//    gulp.src('public/src/scss/main.scss')
//       .pipe(plumber())
//       .pipe(compass({
//           config_file: './config.rb',
//           css: './public/src/css/',
//           sass: './public/src/scss/'
//       }))
//      .pipe(autoprefixer('last 2 versions'))
//      .pipe(gulp.dest('public/src/css/'))
//      .pipe(reload({stream:true}));
// });
//
//
// gulp.task('html', function() {
//   gulp.src('public/**/*.html');
// });
//
// gulp.task('browser-sync', function() {
//     browserSync({
//       server: {
//          baseDir: "./public/"
//       }
//    });
// });
//
// gulp.task('watch', function() {
//    gulp.watch('public/src/js/**/*.js', ['scripts']);
//    gulp.watch('public/src/scss/**/*.scss', ['styles']);
//    gulp.watch('public/**/*.html', ['html']);
// });
//
// gulp.task('default', ['scripts', 'styles', 'html', 'browser-sync', 'watch']);
