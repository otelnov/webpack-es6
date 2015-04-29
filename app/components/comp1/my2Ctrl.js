class My2Ctrl {
  constructor(MainFactory) {
    this.result = MainFactory.sum(15, 5);
  }
}

My2Ctrl.$inject = ['MainFactory'];

export default ngModule => {
  ngModule.controller('My2Ctrl', My2Ctrl);
};
