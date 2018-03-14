
const   gulp = require('gulp'),
        sass = require('gulp-sass'),
     plumber = require('gulp-plumber'),
  sourceMaps = require('gulp-sourcemaps'),
  autoPrefix = require('gulp-autoprefixer'),
      panini = require('panini'),
 browserSync = require('browser-sync').create()


const settings = {
  url: 'http://localhost:8080/build',
  sass: 'src/_scss/**/*.scss',
  css: 'build/assets/css/',
  srcFiles: 'src/**/*.html'
}

gulp.task('serve', () => {
  browserSync.init({
    proxy: settings.url
  })
  gulp.watch(settings.sass, ['scss'])
})

gulp.task('scss', () => {
  gulp.src(settings.sass)
  .pipe(plumber())
  .pipe(sourceMaps.init())
  .pipe(sass())
  .pipe(autoPrefix())
  .pipe(sourceMaps.write())
  .pipe(gulp.dest(settings.css))
  .pipe(browserSync.stream())
})

gulp.task('panini', () => {
  gulp.src('src/pages/**/*.html')
    .pipe(panini({
      root: 'src/pages/',
      layouts: 'src/layouts/',
      partials: 'src/partials/',
      helpers: 'src/helpers/',
      data: 'src/data/'
    }))
    .pipe(gulp.dest('build'))
    panini.refresh();
})




gulp.task('default', ['panini', 'scss', 'serve']);
gulp.watch(settings.srcFiles, ['panini']);
gulp.watch(settings.srcFiles).on('change', browserSync.reload)

