var gulp = require('gulp');
var sass = require('gulp-sass');
var sassGlob = require("gulp-sass-glob");
var plumber = require('gulp-plumber');
var config = require('../config.js');

gulp.task('sass', function(){
  return gulp.src(config.scss+'/**/*.scss')
  	.pipe(plumber({
  		errorHandler:function(err){
  			console.log(err.messageFormatted);
  			this.emit('end');
  		}
  	}))
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(gulp.dest(config.build));
});
