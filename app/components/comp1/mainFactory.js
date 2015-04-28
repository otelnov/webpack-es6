class MainFactory {
  constructor() {
  }

  sum(num1, num2) {
    return num1 + num2;
  }
}

export default ngModule => {
  let register = require('../../register')(ngModule);
  register.factory('MainFactory', MainFactory);
}

