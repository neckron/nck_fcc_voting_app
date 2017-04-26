
angular
  .module("votingApp")
  .controller("userPollsCtrl" , ['$scope' , '$location' , 'apiService' , 'userCredentialService' , 'growl' ,
  
  function ($scope, $location , apiService, userCredentialService, growl){	
  
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
        console.log(response.data);
        $scope.userPolls.splice(pollToDelete,1);
        growl.success('Poll deleted');
      }), function(response){
  	console.log('error llamando al api');	
      }
    }


}]);

