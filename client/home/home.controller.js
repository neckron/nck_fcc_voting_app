
angular
  .module("votingApp")
  .controller("homeCtrl" , ['$scope' , '$location' , 'apiService' , 'userCredentialService' ,  
    
  function ($scope, $location , apiService , userCredentialService){

    $scope.userPolls = [];
    $scope.loggedIn = userCredentialService.isLoggedIn();

    apiService.polls()
      .then(function(response){
	$scope.userPolls = response;
      }), function(response){
  	console.log('error llamando al api');	
      }

}]);



