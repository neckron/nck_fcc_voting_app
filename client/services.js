angular
  .module('votingApp')
  .service('authService', ['$http' , 'userCredentialService' ,
  
  function ($http , userCredentialService) {
    //  var authService = {};

    // function to login in the application -----------------------------------
    login = function (credentials) {
      return $http.post('api/user/login', credentials)
        .then(function (res) {
	  userCredentialService.saveToken(res.data.token);
          return res.data;
        }, function(res){
	  return res.data;      
        });
    };

    // function to register a new user ----------------------------------------
    register = function(user){
      return $http.post('api/user/register',user)
        .then(function(res){
	  userCredentialService.saveToken(res.data.token);
	    return res.data;
	});
    }

  return {
    login : login,
    register : register,
  };
		
}]);
