export default ngModule => {
  ngModule.factory('MainFactory', () => {
    let factory = {
      test: (f)=> {
        console.log('test',f);
      }
    };

    return factory;
  });
};
