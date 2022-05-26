// only use with "type": "module" in package.json
import gulp from 'gulp';
import imagemin from 'gulp-imagemin';

function minifyImages() {
    return gulp.src('./images/*.jpg')
    .pipe(imagemin())
    .pipe(gulp.dest('./minified/images'))
}

gulp.task("minifyImages", minifyImages);

gulp.task("watch", () => {
    gulp.watch("./images/*", minifyImages)
});

gulp.task("default", gulp.series("minifyImages", "watch"))