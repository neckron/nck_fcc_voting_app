app.controller('myCtrl', function($scope) {
    $scope.firstName= "John";
    $scope.lastName= "Doe";
    $scope.names=[{name:'Jani',country:'Norway'},
	{name:'Hege',country:'Sweden'},
{name:'Kai',country:'Denmark'}];
 $scope.fullName = function() {
        return $scope.firstName + " hola " + $scope.lastName;
    };
	
});

app.controller('myCtrl2', function($scope) {
    $scope.firstname = "John";
    $scope.changeName = function() {
        $scope.firstname = "Nelly";
    }
});


app.controller('customersCtrl', function($scope, $location) {
    $scope.myUrl = $location.absUrl();
});

app.controller('myCtrl3', function($scope, $timeout) {
    $scope.myHeader = "Hello World!";
    $timeout(function () {
        $scope.myHeader = "How are you today?";
    }, 2000);
});

app.controller('myCtrl4', function($scope, $interval) {
    $scope.theTime = new Date().toLocaleTimeString();
    $interval(function () {
        $scope.theTime = new Date().toLocaleTimeString();
    }, 1000);
});

app.controller('myCtrl5', function($scope, hexafy) {
    $scope.hex = hexafy.myFunc(255);
});

app.controller('callApi', function($scope,$http){
	
	var req = {method: 'POST', url: 'http://localhost:8000/api/user/login',
 		  headers: {'Content-Type': 'application/json'},
		  data: { email: 'neckron2@gmdail.com' , password : "12345" }};

	$http(req).then(function(response) {
        $scope.myWelcome = response.data;
    }
	);

}
);
