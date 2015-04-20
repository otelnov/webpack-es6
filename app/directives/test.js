export default ngModule => {
  ngModule.directive('test', () => {

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
