const FeaturesController = $scope => {
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

const FeaturesComponent = {
	templateUrl: './features.template.html',
	controller: FeaturesController
}

export default FeaturesComponent
