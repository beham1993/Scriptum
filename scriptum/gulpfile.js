var gulp = require('gulp'),
    cssmin = require('gulp-cssmin'),
    less = require('gulp-less'),
    lr = require('tiny-lr'),
    connect = require('connect'),
    myth = require('gulp-myth'),
    livereload = require('gulp-livereload'),
    imagemin = require('gulp-imagemin'),
    concat = require('gulp-concat'),
    server = lr();


gulp.task('less', function(){
    gulp.src('./assets/less/style.less')
    .pipe(less())
    .on('error', console.log)
    .pipe(myth())
    .pipe(gulp.dest('./public/css/'))
    .pipe(livereload(server));
})


gulp.task('html', function() {
    gulp.src('./**/*.html')
        .pipe(livereload(server));
});

gulp.task('js', function() {
    gulp.src(['./assets/js/*.js'])
        .pipe(concat('index.js'))
        .pipe(gulp.dest('./public/js'))
        .pipe(livereload(server));
});

gulp.task('images', function() {
    gulp.src(['./assets/img/**/*.jpg', './assets/img/**/*.jpeg', './assets/img/**/*.png'])
        .pipe(imagemin())
        .pipe(gulp.dest('./public/img'))

});


gulp.task('watch', function() {
    // Предварительная сборка проекта
    gulp.run('less');
    gulp.run('images');
    gulp.run('js');

    server.listen(35729, function(err) {
        if (err) return console.log(err);

        gulp.watch('assets/less/**/*.less', function() {
            gulp.run('less');
        });
        gulp.watch('assets/img/**/*', function() {
            gulp.run('images');
        });
        gulp.watch('assets/template/**/*.html', function() {
            gulp.run('html');
        });
        gulp.watch('assets/js/**/*', function() {
            gulp.run('js');
        });
    });

});