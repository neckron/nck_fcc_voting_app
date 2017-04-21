
var app = angular.module('votingApp');
app.directive('navigationDirective', function(){
    return {
      restrict: 'EA',
      templateUrl: '/directives/navigation.template.html',
      controller: 'navigationCtrl as navvm'
    };	
});



