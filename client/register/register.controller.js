angular
  .module("votingApp")
  .controller("registerCtrl" , ['$scope' , '$location', 'authService' ,
  
  function ($scope, $location , authService){	
    $scope.email = "email";
    $scope.name = "name";
    $scope.password = 'password'	
	
    $scope.register = function(){
      var user = {
        'email' : $scope.email,
        'password' : $scope.password,
        'name' : $scope.name
      }
      
      authService.register(user)
        .then(function(response){
          console.log('api invocado'+response.message);
          $location.path('/');
        }), function(response){
          console.log('error llamando al api');	
        }
    }

}]);
