
angular
  .module("votingApp")
  .controller("createPollCtrl" , ['$scope' , '$location' , 'authService' ,
  function ($scope, $location , authService){	
    $scope.username = "Francisco";
   /* $scope.userPolls = [];		


      authService.userPolls($scope.username)
        .then(function(response){
	  $scope.userPolls = response.data;
	}), function(response){
  	  console.log('error llamando al api');	
	}*/

}]);


