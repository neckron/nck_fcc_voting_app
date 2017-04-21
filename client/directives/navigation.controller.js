angular.module('votingApp').controller('navigationCtrl', ['authService' ,

 function (authService){
 	var vm = this;
	 vm.isLoggedIn = authService.isLoggedIn();
	 //TODO
 }

]);

  
