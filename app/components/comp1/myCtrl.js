class MyCtrl {
  constructor(MainFactory) {
    this.result = MainFactory.sum(15, 10);
  }
}

MyCtrl.$inject = ['MainFactory'];

export default ngModule => {
  ngModule.controller('MyCtrl', MyCtrl);
};
