const config = ($routeProvider, $locationProvider) => {

   //$locationProvider.html5Mode(true);

   $routeProvider
      .when('/', {
         templateUrl: './views/home.html'
      })
      .when('/features', {
         templateUrl: './views/features.html'
      })
      .otherwise({
         redirectTo: '/'
      })

}

const routerConfig = ['$routeProvider', '$locationProvider', config];

export default routerConfig;