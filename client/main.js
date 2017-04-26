var app = angular.module("votingApp", ["ngRoute" , "chart.js", "angular-growl"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/login", {
        templateUrl : '/auth/login/login.view.html',
	controller :  'loginCtrl'
    })
    .when("/", {
        templateUrl : '/home/home.view.html',
        controller : 'homeCtrl'
    })
    .when("/register", {
        templateUrl : '/register/register.view.html',
	controller : 'registerCtrl'    
    })
    .when("/userPolls", {
        templateUrl : '/polls/user/userPolls.view.html',
        controller : 'userPollsCtrl'
    })
    .when("/createPoll", {
        templateUrl : '/polls/user/createPoll.view.html',
        controller : 'createPollCtrl'
    })
    .when("/polls", {
        templateUrl : '/home/home.view.html',
        controller : 'homeCtrl'
    })
    .when("/poll/:id", {
        templateUrl : "/polls/poll.view.html",
        controller : 'pollCtrl'
    });
});

app.config(function(growlProvider) {
  console.log('configure growl')
  growlProvider.globalTimeToLive(5000);
  growlProvider.globalPosition('top-right');
})

;

app.run(function($rootScope, $location, userCredentialService){
  $rootScope.$on('$routeChangeStart', function(event, nextRoute, currentRoute) {
      if ($location.path() === '/profile' && !userCredentialService.isLoggedIn()) {
        $location.path('/');
      }
      
      if ($location.path() === '/createPoll' && !userCredentialService.isLoggedIn()) {
        console.log('cant access');
        $location.path('/');
      }

    });
})

