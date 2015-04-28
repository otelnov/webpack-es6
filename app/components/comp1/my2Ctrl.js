class My2Ctrl {
  constructor (MainFactory){
    console.log('my2 controller, first comp');
    this.result = MainFactory.sum(15, 5);
  }
}

My2Ctrl.$inject = ['MainFactory'];

export default ngModule => {
  ngModule.controller('My2Ctrl', My2Ctrl);
}
