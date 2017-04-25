
angular
  .module("votingApp")
  .controller("createPollCtrl" , ['$scope' , '$location' , 'apiService' , 'userCredentialService' ,
  
  function ($scope, $location , apiService , userCredentialService){	
    $scope.pollName = "";
    $scope.option = {
      name : '',
      votes : 0
    }
    $scope.pollOptions = [];

    $scope.addOption = function(){
      console.log('adding option');
      $scope.pollOptions.push($scope.option);
      $scope.option = {
        name : '',
        votes : 0
      }
    }

    $scope.savePoll = function(){
      var poll = {
        user : userCredentialService.currentUser().email,
        options :  $scope.pollOptions,
        title : $scope.pollName
      };

      apiService.createPoll(JSON.stringify(poll))
        .then(function(response){
	  console.log('poll created');
	}), function(response){
  	  console.log('error llamando al api');	
	}
      

    }

}]);


