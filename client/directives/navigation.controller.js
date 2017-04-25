angular.module('votingApp').controller('navigationCtrl', ['userCredentialService' ,

 function (userCredentialService){
 	var vm = this;
	 vm.isLoggedIn = userCredentialService.isLoggedIn();
	 vm.currentUser = userCredentialService.currentUser();

 }

]);

  
