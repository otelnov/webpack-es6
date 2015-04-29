const angular = require('angular');
require('angular-new-router');
const ngModule = angular.module('app', ['ngNewRouter']);

require('./directives')(ngModule);
require('./components/main');
require('./components/header');
require('./components/content');
