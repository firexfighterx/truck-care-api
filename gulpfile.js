var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var eslint = require('gulp-eslint');

gulp.task('start', ['lint'], function() {
    nodemon({
        script: './src/main.js',
        ext: 'js',
        env: {
            'NODE_ENV': 'development'
        }
    }).on('restart', ['lint']);
});

gulp.task('lint', function() {
    return gulp.src(['**/*.js', '!node_modules/**'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('default', ['start']);
