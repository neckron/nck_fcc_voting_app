angular
  .module('votingApp')
  .service('userCredentialService', ['$window' ,
	
  function ($window) {
    
    // function to save token as cookie ---------------------------------------
    saveToken = function (token) {
      console.log(token)
      $window.localStorage['token'] = token;
    }

    // function to retrieve token ---------------------------------------------
    getToken = function () {
      return $window.localStorage['token'];
    };

    // function to validate if a user is logged in ----------------------------
    isLoggedIn = function() {
      var token = getToken();
      var payload;
      if(token){	      
        payload = token.split('.')[1];
        payload = $window.atob(payload);
        payload = JSON.parse(payload);
        return payload.exp > Date.now() / 1000;
      } else {
        return false;
      }
    };

    // function to retrieve the user information ------------------------------
    currentUser = function() {
      if(isLoggedIn()){
        var token = getToken();
        var payload = token.split('.')[1];
        payload = $window.atob(payload);
        payload = JSON.parse(payload);
        return {
          email : payload.email,
          name : payload.name
        };
      }
    };

    logout = function() {
      $window.localStorage.removeItem('token');
    };

  return {
    saveToken : saveToken,
    getToken : getToken,
    isLoggedIn : isLoggedIn,
    currentUser : currentUser,
    logout : logout
  };
		
}]);


