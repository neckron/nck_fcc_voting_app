
angular
  .module("votingApp")
  .controller("loginCtrl" , ['$scope' , '$location' , 'authService' ,
  
  function ($scope, $location , authService){	
    
    $scope.username = "username";
    $scope.password = "password";
		
    $scope.login = function(){
      var credentials = {
        'email' : $scope.username,
	'password' : $scope.password 
      }
      
      authService.login(credentials)
        .then(function(response){
	  $location.path('register');
	}), function(response){
  	  console.log('error llamando al api');	
	}
      }

}]);
