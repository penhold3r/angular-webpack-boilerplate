import AppController from '../../controllers/app.controller'

const HomeController = $scope => {
	$scope.foo = 'bar'

	console.log($scope.foo)
}

const HomeComponent = {
	templateUrl: './home.template.html',
	controller: AppController
}

export default HomeComponent
