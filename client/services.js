angular
  .module('votingApp')
  .service('authService', ['$http' , '$window' ,
	
	function ($http,$window) {
  var authService = {};
 
  var saveToken = function (token) {
	  console.log(token)
	      $window.localStorage['token'] = token;
  }

  var getToken = function () {
      return $window.localStorage['token'];
  };

  var isLoggedIn = function() {
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

 var currentUser = function() {
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

  login = function (credentials) {
    return $http
      .post('api/user/login', credentials)
      .then(function (res) {
	saveToken(res.data.token);
        return res.data;
      }, function(res){
	return res.data;      
      });
  };

  register = function(user){
    return $http.post('api/user/register',user)
		.then(function(res){
		  saveToken(res.data.token);
		    return res.data;
		  });
  }

  userPolls = function(email){
    return $http.get('api/polls/'+email, {
      headers : {
        'Content-Type': 'application/x-www-form-urlencoded',
        'x-access-token' : getToken()
      }
    })
  }
          

  return {
    login : login,
    register : register,
    saveToken : saveToken,
    getToken : getToken,
    isLoggedIn : isLoggedIn,
    userPolls : userPolls
  };
		
}]);
