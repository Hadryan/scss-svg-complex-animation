/**
 * Bumps or Sets specific Version
 * Builds Production Ready Package
 * Creates Tag and commits it
 *
 * @example
 * npm run gulp -- release
 * npm run gulp -- release --importance patch
 * npm run gulp -- release --version 2.1.5
 */
exports.task = function (cb) {
	runSequence.use(gulp);
	runSequence('clean', 'bump', 'webpack-build-prod', 'copy-build-to-dist',// 'deploy-gh-pages',
	//runSequence('clean', 'webpack-build-prod',// 'deploy-gh-pages',
		function (error) {
			if (error) {
				console.log(error.message);
			} else {
				console.log('RELEASE FINISHED SUCCESSFULLY');
			}
			cb(error);
		}
	);
};
