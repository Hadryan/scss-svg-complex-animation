var webpack = require('webpack');
var path = require('path');
var config = {
  context: path.join(__dirname, '..'),
  cache: true,
  entry: {
    'bundle': ['./src/index.js']
  },
	externals: {
		'angular': 'angular'
	},
  output: {
    path: path.resolve(__dirname, process.env.NODE_ENV === 'production' ? './dist/' : './build'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.scss', '.css', '.jade'],
    modulesDirectories: ['node_modules']
  },
  module: {
    loaders: [
    {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }, {
      test: /\.(woff|ttf|eot)$/,
      loader: 'url-loader?prefix=font/'
    }, {
      test: /\.(jpe?g|png|gif|svg)$/i,
      loaders: [
        'url-loader?limit=100',
        'image?bypassOnDebug&optimizationLevel=7&interlaced=false'
      ]
    }, {
      test: /\.jade$/,
      loader: "jade"
    }, {
      test: /\.(scss|sass)$/,
      loader: "style!css!sass?outputStyle=expanded&" +
        "includePaths[]=" +
        (path.resolve(__dirname, '..', "node_modules")) + "&" +
        "includePaths[]=" +
        (path.resolve(__dirname, '..', "node_modules/bourbon/app/assets/stylesheets")) + "&" +
        "includePaths[]=" +
        (path.resolve(__dirname, '..', "src/styles"))
    }]
  },
	plugins: []
};

module.exports = config;
