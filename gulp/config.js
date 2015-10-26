module.exports = {
    banner: function() {
        return 'scss-svg-complex-animation\n' +
		        'https://github.com/cre8labs/scss-svg-complex-animation\n' +
	          'Copyright (c) 2015 Cre8 New Media Limited.\n' +
            'License: MIT.\n' +
            'v' + VERSION;
    },
    outputDir: 'dist/',
    webpackConfig: require('./webpack.config.js')
};