
angular
  .module("votingApp")
  .controller("userPollsCtrl" , ['$scope' , '$location' , 'authService' ,
  function ($scope, $location , authService){	
    $scope.username = "Francisco",
    $scope.userPolls = [];		


    authService.userPolls($scope.username)
      .then(function(response){
	$scope.userPolls = response.data;
      }), function(response){
  	console.log('error llamando al api');	
      }

    $scope.delete = function(poll) { 
      console.log(poll)
      var pollToDelete = $scope.userPolls.indexOf(poll);
      console.log(pollToDelete);  
    }


}]);

