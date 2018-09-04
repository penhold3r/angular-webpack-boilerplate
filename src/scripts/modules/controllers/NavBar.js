import logo from '../../../images/angular-logo.svg';

const controller = $scope => {

   $scope.brand = logo;

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
      console.log($event.currentTarget, link);
   }

}

const NavBar = ['$scope', controller];

export default NavBar;