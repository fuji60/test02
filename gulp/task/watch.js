var gulp = require('gulp');
var watch = require('gulp-watch');
var config = require('../config.js');

gulp.task('watch',function(){
	watch([config.src + '/**/*.scss',config.scss + '/**/*.scss'],function(){
		gulp.start(['sass']);
	})
})