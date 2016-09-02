var gulp = require('gulp');
var livereload = require('gulp-livereload');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer-core');
var mqpacker = require('css-mqpacker');
var csswring = require('csswring');
var less = require('gulp-less');
var path = require('path');
var watch = require('gulp-watch');

gulp.task('default', function() {
    var processors = [
        autoprefixer({
            browsers: ['last 4 version']
        }),
        mqpacker,
        csswring
    ];
    return gulp.src('./less/*.less')
        .pipe(less())
        .pipe(postcss(processors))
        .pipe(gulp.dest('build/css'));

});
// gulp.task('watch', function() { // 这里的watch，是自定义的，写成live或者别的也行
//     var server = livereload();
//     gulp.watch('./src/*.less', function(file) {
//         server.changed(file.path);
//     });
// });
gulp.task('watch', function() {
    watch('./less/*.less', function() {
        gulp.start('default'); 
        //livereload.changed();
    })
})


// gulp.task('watch', function() {
//     var server = livereload();
//     watch(config.less.all, function() {
//         gulp.start('less');
//     })
// })

// gulp.task('watch', function() {
//     watch('./src/*.less', function() {
//         livereload.start('less');
//     })
// })
