const
    gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
    return gulp.src('app/sass/**/*.sass')
        .pipe(sass({
            includePaths: require('node-normalize-scss').includePaths,
            outputStyle: 'expanded'
        }).on('error', sass.logError))
        .pipe(autoprefixer(['last 15 versions'], {
            cascade: true
        }))
        .pipe(gulp.dest('app/css'));
});

gulp.task('watch', function () {
    gulp.watch('app/sass/**/*.sass', gulp.series('sass'));
});

gulp.task('default', gulp.parallel('watch', 'sass'));

// const
//     browserSync = require('browser-sync').create(),
//     cssnano = require('gulp-cssnano'),
//     rename = require('gulp-rename'),
//     del = require('del'),
//     imagemin = require('gulp-imagemin'),
//     pngquant = require('imagemin-pngquant'),
//     cache = require('gulp-cache'),
//     autoprefixer = require('gulp-autoprefixer');



// gulp.task('sass', function () {
//     return gulp.src('app/sass/**/*.sass')
//         .pipe(sass())
//         .pipe(autoprefixer(['last 15 versions'], {
//             casade: true
//         }))
//         .pipe(gulp.dest('app/css'))
//         .pipe(browserSync.stream());
// });

// gulp.task('browser-sync', function () {
//     browserSync.init({
//         server: {
//             baseDir: 'app'
//         },
//         notify: false
//     });
// });

// gulp.task('clean', function () {
//     return del.sync('dist');
// })

// gulp.task('clearCache', function () {
//     return cache.clearAll();
// })

// gulp.task('img', function () {
//     return gulp.src('app/img/**/*')
//         .pipe(cache(imagemin({
//             interlaced: true,
//             progresive: true,
//             svgoPlagins: [{
//                 removeViewBox: false
//             }],
//             use: [pngquant()]
//         })))
//         .pipe(gulp.dest('dist/img'));
// });

// gulp.task('watch', function () {
//     gulp.watch('app/sass/**/*.sass', gulp.parallel('sass'));
//     gulp.watch("app/*.html").on('change', browserSync.reload);
//     gulp.watch('app/js/**/*.js', browserSync.reload);
// });

// gulp.task('build', gulp.parallel('clean', 'sass', 'img'), function () {
//     let buildCss = gulp.src([
//             'app/css/main.css'
//         ])
//         .pipe(gulp.dest('dist/css'));

//     let buildFonts = gulp.src('app/fonts/**/*')
//         .pipe(gulp.dest('dist/fonts'));

//     let buildJs = gulp.src('app/js/**/*')
//         .pipe(gulp.dest('dist/js'));

//     let buildHtml = gulp.src('app/*.html')
//         .pipe(gulp.dest('dist'));

// })

// gulp.task('default', gulp.parallel('watch', 'browser-sync'));