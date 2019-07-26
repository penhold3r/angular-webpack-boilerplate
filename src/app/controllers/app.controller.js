const AppController = [
	'$scope',
	$scope => {
		$scope.init = 'App loads'

		$scope.lang = 'es'

		$scope.title = 'Materialize + Angular App'

		$scope.description = 'Starter boilerplate for Angular 1.x using Webpack 4'

		console.log($scope.init)
	}
]

export default AppController
