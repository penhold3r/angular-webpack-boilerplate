const controller = $scope => {
	$scope.title = 'Materialize + Angular App'

	$scope.description = 'Starter boilerplate for Angular 1.x using Webpack 4'

	$scope.features = [
		'Includes',
		'Routes',
		'HTML Webpack Plugin',
		'Sass support',
		'Custom Materialize colors',
		'Images loader',
		'Custom Web Fonts'
	]
}

const MainController = ['$scope', controller]

export default MainController
