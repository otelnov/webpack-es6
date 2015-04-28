class FirstCtrl {
  constructor (){
    console.log('first controller, second comp');
  }
}

export default ngModule => {
  ngModule.controller('FirstCtrl', FirstCtrl);
}
