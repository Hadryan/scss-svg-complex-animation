/**
 * Webpack Prod-Build
 *
 * @example
 * npm run gulp -- webpack-build-prod
 */
exports.task = function (callback) {
	var prodConfig = Object.create(config.webpackConfig);

	prodConfig.output.path = path.join(root, config.outputDir);

	prodConfig.plugins = prodConfig.plugins.concat(
		new webpack.DefinePlugin({
			"process.env": {
				"NODE_ENV": JSON.stringify("production")
			}
		}),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.UglifyJsPlugin(),
		new webpack.BannerPlugin(config.banner())
	);

	prodConfig.devtool = false;
	prodConfig.debug = false;

	webpack(prodConfig, function (err, stats) {
		if (err) throw new gutil.PluginError("webpack-build-prod", err);
		gutil.log("[webpack-build-prod]", stats.toString({
			colors: true
		}));
		callback();
	});
};