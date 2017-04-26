
angular
  .module("votingApp")
  .controller("pollCtrl" , ['$scope' , '$location' , 'apiService' , '$routeParams' , 'userCredentialService' ,
  
  function ($scope, $location , apiService , $routeParams, userCredentialService){	
    
    $scope.poll = ''; 
    $scope.loggedIn = userCredentialService.isLoggedIn();
    
    apiService.pollById($routeParams.id)
      .then(function(response){
        $scope.poll = response;
        refreshChart();
      }), function(response){
        console.log('cant find poll');
      }
    
    $scope.noption = {
      name : '',
      votes : 0
    };

    $scope.labels = [];
    $scope.data = [];
    

    $scope.addOption = function(){
      console.log($scope.noption)
      console.log('adding option');  
      $scope.poll.options.push($scope.noption);
      $scope.noption = {
        name : 'nombre',
        votes : 0
      };
      updatePoll();
      //refreshChart();
    }

    $scope.vote = function(option){
      option.votes = option.votes+1;
      refreshChart();
      updatePoll();
    }
   
    // utility functions -----------------------------------------

    function refreshChart(){
      $scope.labels = [];
      $scope.data = [];

      for(i=0 ; i < $scope.poll.options.length ;i++){
         $scope.labels.push($scope.poll.options[i].name);
         $scope.data.push($scope.poll.options[i].votes);
         console.log($scope.labels);
        console.log($scope.data);
      }
    }

    function updatePoll(){
      console.log($scope.poll)
      apiService.updatePoll($routeParams.id ,JSON.stringify($scope.poll))
      .then(function(response){
        console.log('updated');
      }), function(response){
        console.log('cant find poll');
      }
    }
    
}]);



