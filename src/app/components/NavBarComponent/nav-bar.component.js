import logo from '../../../images/angular-logo.svg'

const NavBarController = $scope => {
	const sideNavEl = document.querySelectorAll('.sidenav')
	M.Sidenav.init(sideNavEl)

	$scope.brand = logo

	$scope.links = [
		{
			text: 'Home',
			url: './'
		},
		{
			text: 'Features',
			url: './#!/features'
		}
	]

	$scope.navigate = ($event, link) => {
		console.log($event.currentTarget, link)
		const sideNav = M.Sidenav.getInstance(elem)
		sideNav.close()
	}
}

const NavBarComponent = {
	templateUrl: './nav-bar.template.html',
	controller: NavBarController
}

export default NavBarComponent
