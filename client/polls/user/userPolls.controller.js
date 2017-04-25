
angular
  .module("votingApp")
  .controller("userPollsCtrl" , ['$scope' , '$location' , 'apiService' , 'userCredentialService' ,
  
  function ($scope, $location , apiService, userCredentialService){	
  
    $scope.userPolls = [];
    var user = userCredentialService.currentUser();

    apiService.userPolls(user.email)
      .then(function(response){
	$scope.userPolls = response.data;
      }), function(response){
  	console.log('error llamando al api');	
      }

    $scope.delete = function(poll) { 
      console.log(poll)
      var pollToDelete = $scope.userPolls.indexOf(poll);
      console.log(pollToDelete);  

      apiService.deletePoll(poll._id)
      .then(function(response){
	$scope.userPolls = response.data;
      }), function(response){
  	console.log('error llamando al api');	
      }
    }


}]);

