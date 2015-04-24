class MainFactory {
  constructor() {
  }

  test(f) {
    console.log('test' + f);
  }
}

export default ngModule => {
  ngModule.register.factory('MainFactory', MainFactory);
}

