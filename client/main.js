var app = angular.module("votingApp", ["ngRoute" , "chart.js"])
  .config(function($routeProvider) {
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
    .when("/poll", {
        templateUrl : "/polls/poll.view.html",
        controller : 'pollCtrl'
    });
}); 
