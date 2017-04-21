

var app = angular.module("votingApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : '/auth/login/login.view.html',
	controller :  'loginCtrl'
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
    .when("/blue", {
        templateUrl : "test.html"
    });
}); 
