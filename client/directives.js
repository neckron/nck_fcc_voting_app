var app = angular.module('votingApp');
app.directive("myDirective", function() {
    return {
        template : "<h1>Made by a directive!</h1>"
    };
});
