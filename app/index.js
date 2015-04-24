const angular = require('angular');
require('angular-ui-router');

const ngModule = angular.module('app', ['ui.router']);

ngModule.config(['$stateProvider', '$urlRouterProvider',
  ($stateProvider, $urlRouterProvider) => {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('app', {
        abstract: true,
        views: {
          '@': {
            template: require('./components/common/layout.html')
          },
          'header@app': {
            template: require('./components/common/header.html')
          },
          'footer@app': {
            template: require('./components/common/footer.html')
          }
        }
      })
      .state('app.main', {
        url: '/',
        template: require('./components/main/main.html'),
        controller: 'MainCtrl',
        controllerAs: 'vm'
      })
      .state('app.new', {
        url: '/new',
        template: require('./components/main/main.html'),
        controller: 'NewCtrl',
        controllerAs: 'vm'
      });
  }
]);

ngModule.register = require('./register')(ngModule);
require('./directives')(ngModule);
require('./components')(ngModule);
