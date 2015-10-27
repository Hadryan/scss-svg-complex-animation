/**
 * Webpack Dev-Server
 *
 * @example
 * npm run gulp -- webpack-dev-server
 */

var open = require('open');

exports.task = function () {
	var devConfig = Object.create(config.webpackConfig),
		host = HOST || 'localhost',
		compiler,
		bundleStartTime = null,
		url = "http://" + host + ":" + LR_PORT;

	devConfig.entry.bundle.unshift('webpack/hot/dev-server');
	devConfig.entry.bundle.unshift('webpack-dev-server/client?http://' + host + ':' + LR_PORT);

	devConfig.devtool = 'eval';
	devConfig.debug = true;

	devConfig.plugins.push(new webpack.HotModuleReplacementPlugin());
	devConfig.plugins.push(new webpack.NoErrorsPlugin());
	devConfig.plugins.push(new webpack.SourceMapDevToolPlugin({}));

	compiler = webpack(devConfig);

	compiler.plugin('compile', function () {
		console.log('Bundling...');
		bundleStartTime = Date.now();
	});

	compiler.plugin('done', function () {
		console.log('Bundled in ' + (Date.now() - bundleStartTime) + 'ms!');
	});

	process.env.NODE_ENV = 'development';

	new WebpackDevServer(compiler, {
		stats: {
			colors: true
		},
		contentBase: 'build/',
		publicPath: devConfig.output.publicPath,
		hot: true,
		host: host,
		quiet: false,
		noInfo: false
	}).listen(LR_PORT, host, function (err) {
			if (err) throw new gutil.PluginError("webpack-dev-server", err);
			gutil.log("[webpack-dev-server]", url);
			setTimeout(function () {
				open(url);
			}, 1000);
		});
};
