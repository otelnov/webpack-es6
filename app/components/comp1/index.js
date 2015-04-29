const angular = require('angular');
const ngModule = angular.module('app');

require('./myCtrl')(ngModule);
require('./my2Ctrl')(ngModule);
require('./mainFactory')(ngModule);
