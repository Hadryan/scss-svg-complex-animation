global.webpack          = require('webpack');
global.WebpackDevServer = require("webpack-dev-server");
global.gulp             = require('gulp');
global.gutil            = require('gulp-util');
global.fs               = require('fs');
global.argv             = require('minimist')(process.argv.slice(2));
global.path             = require('path');
global.filter           = require('gulp-filter');

global.VERSION          = argv.version || require('../package.json').version;
global.LR_PORT          = argv.port || argv.p || 8080;
global.HOST             = argv.host || argv.h || 'localhost';

global.config           = require('./config');
