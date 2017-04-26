
angular
  .module("votingApp")
  .controller("createPollCtrl" , ['$scope' , '$location' , 'apiService' , 'userCredentialService' , 'growl' ,
  
  function ($scope, $location , apiService , userCredentialService , growl){	
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
      if($scope.pollOptions.length > 0){
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
        $location.path('/userPolls');
        growl.success('Poll created');
      }else{
        growl.error('You have to add some options!');
      }
    }

}]);


