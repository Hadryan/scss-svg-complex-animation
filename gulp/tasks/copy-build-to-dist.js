/**
 * clean dist folder
 *
 * @example
 * npm run gulp -- clean
 */
exports.task = function () {
	return gulp.src(['build/**/*'])
		.pipe(gulp.dest('dist'));
};