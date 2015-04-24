//export default ngModule => {
//  ngModule.directive('test', () => {
//    require('./test.css');
//    return {
//      restrict: 'E',
//      scope: {},
//      template: require('./test.html'),
//      controllerAs: 'vm',
//      controller: function () {
//        const vm = this;
//        vm.test = 'test';
//      }
//    }
//  });
//};


class Test {
  constructor() {
    this.restrict = 'E';
    this.scope = {};
    this.template = require('./test.html');
    this.controllerAs = 'vm';
    this.controller = function () {
      const vm = this;
      vm.test = 'test';
    };
  }
}

export default ngModule => {
  require('./test.css');
  ngModule.register.directive('test', Test)
}
