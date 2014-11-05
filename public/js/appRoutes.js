angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider){
      $routeProvider
        // home page
        .when('/', {
          templateUrl: 'views/home.html',
          controller: 'MainController'
        })
        //cats page
        .when('/cats', {
            templateUrl: 'views/cat.html',
            controller: 'CatController'
        });
      $locationProvider.html5Mode(true);

  }]);
