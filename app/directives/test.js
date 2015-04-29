class Test {
  constructor() {
    this.restrict = 'E';
    this.scope = {};
    this.template = require('./test.html');
    this.controllerAs = 'vm';
    this.controller = function () {
      const vm = this;
      vm.test = 'ladirective';
    };
  }
}

export default ngModule => {
  require('./test.css');
  let register = require('../register')(ngModule);
  register.directive('test', Test);
};
