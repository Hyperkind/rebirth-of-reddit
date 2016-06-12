var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('hello', function() {
  console.log('why hello there');
})

gulp.task('sass', function(){
  return gulp.src('app/scss/**/*')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('app/css'))
});
