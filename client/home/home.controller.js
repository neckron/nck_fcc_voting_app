
angular
  .module("votingApp")
  .controller("homeCtrl" , ['$scope' , '$location' , 'apiService' , '$rootScope' , 'userCredentialService' ,  
    
  function ($scope, $location , apiService , $rootScope , userCredentialService){

    $scope.userPolls = [];
    $rootScope.selectedPoll = "";
    $scope.loggedIn = userCredentialService.isLoggedIn();

    apiService.polls()
      .then(function(response){
	$scope.userPolls = response;
      }), function(response){
  	console.log('error llamando al api');	
      }

    $scope.selectPoll = function(poll){
      $rootScope.selectedPoll = poll;
      console.log(poll);
    }

    

}]);



