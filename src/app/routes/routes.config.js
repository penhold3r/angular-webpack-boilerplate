const config = ($routeProvider, $locationProvider) => {
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

	//$locationProvider.html5Mode({ enabled: true })
}

const routerConfig = ['$routeProvider', '$locationProvider', config]

export default routerConfig
