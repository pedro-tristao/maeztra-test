const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cssNano = require('gulp-cssnano');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify')
const del = require('del');

function watchFiles(){
    gulp.watch('./src/js/**/*.js', js);
    gulp.watch('./src/scss/**/*.scss', style);
    gulp.watch('./src/html/*.html', html);
}

function clean() {
    return del('./dist/**/*')
}

function style(){
    return gulp.src('./src/scss/index.scss')
    .pipe(concat('maeztra-test.main.min.css'))
    .pipe(sass())
    .pipe(cssNano({
        autoprefixer: {
            add: true
        }
    }))
    .pipe(gulp.dest('./dist/css'))
}

function html(){
    return gulp.src('./src/html/**/*.html')
    .pipe(gulp.dest('./dist/html'))
}

function js(){
    return gulp.src('./src/js/*.js')
    .pipe(concat('maeztra-test.main.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'))
}

exports.default = gulp.series(clean, gulp.parallel(style, html, js));
exports.watch = watchFiles;


