import gulp from 'gulp';
import babel from 'gulp-babel';

const paths = {
    src: ['src/**/*.js', '!node_modules/**', '!src/tests/**'],
    dest: './dest'
};

gulp.task('babelify', () => {
    return gulp.src(paths.src).pipe(babel()).pipe(gulp.dest(paths.dest));
});
gulp.task('default', ['babelify']);
