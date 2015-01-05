app.controller('AppCtrl', ['$scope','$state',
  function($scope,$state) {
      console.log('Hello world! from AppCtrl');
}]);

app.controller('UserCtrl', ['$scope','$state',
    function($scope,$state) {
        console.log('Hello world! from UserCtrl');

        $scope.doLogin = function(user){
            console.log(user);
            $state.go('yf.view')
        }
    }]);

app.controller('MainCtrl', ['$scope','$state',
    function($scope,$state) {
        console.log('Hello world! from MainCtrl');

    }]);

app.controller('NavbarCtrl', ['$scope','$state',
    function($scope,$state) {
        console.log('Hello world! from NavbarCtrl');
        $(".notification-dropdown").each(function (index, el) {
            var $el = $(el);
            var $trigger = $el.find('.trigger');
            var $dialog = $el.find('.pop-dialog');
            $trigger.click(function(){
                $dialog.show();
            });
            $dialog.click(function (e) {
                e.stopPropagation()
            });
        });
        $(body).click(function(){

        })
        $scope.signout = function($scope){
            alert('signOut');
            $state.go('yf.signin');
        }

    }]);