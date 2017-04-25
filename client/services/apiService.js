angular
  .module('votingApp')
  .service('apiService', ['$http' , 'userCredentialService' ,
	
  function ($http, userCredentialService) {
    
    // function for retrieve the polls of a user -------------------------------
    userPolls = function(email){
      return $http.get('api/polls/'+email, {
        headers : {
          'Content-Type': 'application/x-www-form-urlencoded',
          'x-access-token' : userCredentialService.getToken()
        }
      })
    }

    // function for retrieve all the polls -------------------------------
    polls = function(){
      return $http.get('api/polls')
        .then(function(res){
          return res.data;
        })
    }

    // function for delete a poll ---------------------------------------------
    deletePoll = function(pollId){
      return $http.delete('api/polls/'+pollId ,{
        headers : {
          'Content-Type': 'application/x-www-form-urlencoded',
          'x-access-token' : userCredentialService.getToken()
        }
      });
    }

    //function that allows create a new poll ----------------------------------
    createPoll = function(poll){
      console.log(poll)
      return $http.post('api/polls' , poll , {
        headers : {
          'Content-Type': 'application/json',
          'x-access-token' : userCredentialService.getToken()
        }
      })
    }
   
    
    return {
    userPolls : userPolls,
    deletePoll : deletePoll,
    polls : polls,
    createPoll : createPoll
  };
		
}]);
