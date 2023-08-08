var gulp = require('gulp');
var postcss = require('gulp-postcss');
var postcssImport = require('postcss-import');
var cssnano = require('cssnano');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('styles', function() {
    return gulp.src('src/*.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([
            postcssImport(),
            cssnano()
        ]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
    gulp.watch('src/*.css', gulp.series('styles'));
});

module.exports.build = gulp.series('styles');
module.exports.watch = gulp.series('watch');