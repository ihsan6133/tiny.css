const gulp = require('gulp');
const postcss = require('gulp-postcss');
const postcssImport = require('postcss-import');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');

gulp.task('styles', function() {
    return gulp.src('src/builds/*.css')
        .pipe(postcss([postcssImport(), autoprefixer(), cssnano()]))
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
    gulp.watch('src/*.css', gulp.series('styles'));
});

module.exports.build = gulp.series('styles');
module.exports.watch = gulp.series('watch');