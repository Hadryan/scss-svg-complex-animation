/**
 * clean dist folder
 *
 * @example
 * npm run gulp -- clean
 */
exports.task = function () {
	return del([
		'dist/**/*'
	]);
};