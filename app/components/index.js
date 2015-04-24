require('../css/main.css');

export default ngModule => {
  require('./main/newCtrl')(ngModule);
  require('./main/mainFactory')(ngModule);
  require('./main/mainCtrl')(ngModule);
};
