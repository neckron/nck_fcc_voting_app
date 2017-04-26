angular.module('votingApp').controller('navigationCtrl', ['$scope' , 'userCredentialService' ,

 function ($scope , userCredentialService){
 	var vm = this;
	 vm.isLoggedIn = userCredentialService.isLoggedIn();
	 vm.currentUser = userCredentialService.currentUser();

   $scope.logout = function(){
    console.log('loggin out')
    userCredentialService.logout();
   }
 }

]);

  
