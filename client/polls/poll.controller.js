
angular
  .module("votingApp")
  .controller("pollCtrl" , ['$scope' , '$location' , 'apiService' , '$rootScope' ,
  
  function ($scope, $location , apiService , $rootScope){	
    
    $scope.poll = $rootScope.selectedPoll;
    $scope.noption = {
      name : 'nombre',
      votes : 0
    };

    $scope.labels = [];
    $scope.data = [];
    refreshChart();

    $scope.addOption = function(){
      console.log($scope.noption)
      console.log('adding option');  
      $scope.poll.options.push($scope.noption);
      $scope.noption = {
        name : 'nombre',
        votes : 0
      };
      refreshChart();
    }

    $scope.vote = function(option){
      option.votes = option.votes+1;
      refreshChart();
    }
   
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
    
}]);



