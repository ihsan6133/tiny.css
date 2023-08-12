var gulp = require('gulp');
var postcss = require('gulp-postcss');
var postcssImport = require('postcss-import');
var cssnano = require('cssnano');

gulp.task('styles', function() {
    return gulp.src('src/builds/*.css')
        .pipe(postcss([postcssImport(), cssnano()]))
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
    gulp.watch('src/*.css', gulp.series('styles'));
});

module.exports.build = gulp.series('styles');
module.exports.watch = gulp.series('watch');