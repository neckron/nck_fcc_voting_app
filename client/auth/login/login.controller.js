
angular
  .module("votingApp")
  .controller("loginCtrl" , ['$scope' , '$location' , 'authService' , 'growl',
    
  
  function ($scope, $location , authService , growl){	
    
    $scope.username = "";
    $scope.password = "";
    $scope.message = "";
		
    $scope.login = function(){
      var credentials = {
        'email' : $scope.username,
	'password' : $scope.password 
      }
      
      authService.login(credentials)
        .then(function(response){
          if(response.status == 401){
            growl.error(response.message);
          }else{
            growl.success('Welcome ');
            $location.path('/');
          }
	}), function(response){
  	  growl.error('Unexpected error');	
	}
      }

}]);
