const angular = require('angular');
require('angular-ui-router');
require('oclazyload');

const ngModule = angular.module('app', ['ui.router', 'oc.lazyLoad']);

ngModule.config(['$stateProvider', '$urlRouterProvider',
  ($stateProvider, $urlRouterProvider) => {

    $urlRouterProvider.otherwise('/comp1/my');

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
      .state('app.comp1', {
        abstract: true,
        url: '/comp1',
        template: '<ui-view></ui-view>',
        resolve: {
          lazy: function ($ocLazyLoad) {
            return $ocLazyLoad.load('./comp1.js');
          }
        }
      })
      .state('app.comp2', {
        abstract: true,
        url: '/comp2',
        template: '<ui-view></ui-view>',
        resolve: {
          lazy: function ($ocLazyLoad) {
            return $ocLazyLoad.load('./comp2.js');
          }
        }
      })
      .state('app.comp1.my', {
        url: '/my',
        template: require('./components/comp1/my.html'),
        controller: 'MyCtrl',
        controllerAs: 'vm'
      })
      .state('app.comp1.my2', {
        url: '/my2',
        template: require('./components/comp1/my2.html'),
        controller: 'My2Ctrl',
        controllerAs: 'vm'
      })
      .state('app.comp2.first', {
        url: '/first',
        template: require('./components/comp2/first.html'),
        controller: 'FirstCtrl',
        controllerAs: 'vm'
      })
      .state('app.comp2.second', {
        url: '/second',
        template: require('./components/comp2/second.html'),
        controller: 'SecondCtrl',
        controllerAs: 'vm'
      });
  }
]);

require('./directives')(ngModule);
