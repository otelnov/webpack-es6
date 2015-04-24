export default ngModule => {
  ngModule.controller('NewCtrl', ['MainFactory',
    (MainFactory) => {
      console.log('new controller');
      MainFactory.test(4);
    }
  ]);
};
