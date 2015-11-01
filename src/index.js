/* global angular */

'use strict';

var ngModName = 'cre8labs.cre8SvgAnimation';

var template = require('./templates/main.jade');

angular
  .module(ngModName, [])
  .directive('cre8SvgAnimation', function () {
    return {
      restrict: 'E',
      replace: true,
      template: template
    };
  });

module.exports = ngModName;
