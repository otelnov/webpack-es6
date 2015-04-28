class SecondCtrl {
  constructor (){
    console.log('second controller, second comp');
  }
}

export default ngModule => {
  ngModule.controller('SecondCtrl', SecondCtrl);
}
