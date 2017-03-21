var gulp = require('gulp');

var frontNote = require('gulp-frontnote');


gulp.task("fn",function(){
 gulp.src('./assets/scss/**/*.scss')
 .pipe(frontNote({
 	out: './docs',
 	css: '../build/style.css',
 	cache: false, // こっちはキャッシュの無効
    clean: true,  // こっちで毎回削除→生
 }));

 });