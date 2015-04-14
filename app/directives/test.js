export default ngModule => {

  if(ON_TEST){
    require('./test.test')(ngModule);
  }

  ngModule.directive('test', () => {
    require('./test.css');
    return {
      restrict: 'E',
      scope: {},
      template: require('./test.html'),
      controllerAs: 'vm',
      controller: function () {
        const vm = this;

        vm.test = 'test';
      }
    }
  });
};
