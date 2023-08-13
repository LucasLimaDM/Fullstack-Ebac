const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const obfuscate = require('gulp-obfuscate');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

function comprimeImagens(){
    return gulp.src('./source/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'));
}

function comprimeJavascript(){
    return gulp.src('./source/*.js')
        .pipe(uglify())
        .pipe(obfuscate())
        .pipe(gulp.dest('./build'));
}

function compilaSass(){
    return gulp.src('./source/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build'))
}


exports.sass = compilaSass;
exports.javascript = comprimeJavascript;
exports.watch = function(){
    gulp.watch(
        //Arquivos a serem observados
        './source/*.scss',
        //Não ignorar a ativação inicial do watch
        {ignoreInitial: false},
        //Função executada ao disparar do watch
        gulp.series(compilaSass)
    );

    gulp.watch(
        './source/*.js',
        {ignoreInitial: false},
        gulp.series(comprimeJavascript)
    )

    gulp.watch(
        './source/images/*',
        {ignoreInitial: false},
        gulp.series(comprimeImagens)
    )

};
exports.imagemin = comprimeImagens;