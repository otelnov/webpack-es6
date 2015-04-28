class MyCtrl {
  constructor (MainFactory){
    console.log('my controller, first comp');
    this.result = MainFactory.sum(15, 10);
  }
}

MyCtrl.$inject = ['MainFactory'];

export default ngModule => {
  ngModule.controller('MyCtrl', MyCtrl);
}
