export default ngModule => {
  ngModule.controller('MainController', ['$router', MainController]);
  ngModule.controller('AppController', ['$router', AppController]);

  function AppController($router) {
    $router.config([
      {
        path: '/',
        component: 'main'
      }
    ]);
  }

  function MainController($router) {
    $router.config([
      {
        path: '/',
        component: {
          header: 'header',
          content: 'content'
        }
      }
    ]);
  }

  MainController.prototype.canActivate = function () {
    return true;
  };
};
