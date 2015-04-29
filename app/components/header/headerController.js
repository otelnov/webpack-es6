export default ngModule => {
  ngModule.controller('HeaderController', ['$router', HeaderController]);

  function HeaderController($router) {
    $router.config([

    ]);
  }
};
