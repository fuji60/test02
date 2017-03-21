var gulp = require('gulp');

var styledocco = require('gulp-styledocco');
var kss = require('kss');


var kssConfig = {
	source: "./assets/scss",
	title: 'Style Guide',
	destination: './styleguide',
	css: '../build/style.css',
	template: './template'
};

gulp.task('kss',function(){
	return kss(kssConfig);
})
/*var frontNote = require('gulp-frontnote');

gulp.task("fn",function(){
 gulp.src('./build/style.css')
 .pipe(frontNote({
 	out: './docs'
 }));

 })*/