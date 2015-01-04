app.controller('AppCtrl', ['$scope',
  function($scope) {
      console.log('Hello world! from AppCtrl');
      $scope.test = function(){
          alert('test');
      }
}]);

app.controller('UserCtrl', ['$scope','$state',
    function($scope,$state) {
        console.log('Hello world! from UserCtrl');

        $scope.test = function(){
            alert('test');
        }

        $scope.doLogin = function(user){
            console.log(user);
            $state.go('yf.main')
        }
    }]);
