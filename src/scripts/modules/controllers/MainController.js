const controller = $scope => {
   $scope.title = 'Materialize + Angular App';

   $scope.features = [
      'HTML Webpack Plugin',
      'Sass support',
      'Images loader',
      'Custom Web Fonts'
   ]
}

const MainController = ['$scope', controller];

export default MainController;