import MainCtrl from './main/mainCtrl'
require('../css/main.css');

export default ngModule => {
  require('./main/newCtrl')(ngModule);
  require('./main/mainFactory')(ngModule);

  ngModule.controller('MainCtrl', MainCtrl);
};
