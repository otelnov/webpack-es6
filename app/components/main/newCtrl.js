export default ngModule => {
  ngModule.controller('NewCtrl', (MainFactory) => {
    console.log('new controller');
    MainFactory.test(4);
  });
};
