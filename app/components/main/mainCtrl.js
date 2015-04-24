class MainCtrl {
  constructor (MainFactory){
    this.cont = 88;
    MainFactory.test(7);
    console.log('main');
  }
}

MainCtrl.$inject = ['MainFactory'];

export default ngModule => {
  ngModule.controller('MainCtrl', MainCtrl);
}
