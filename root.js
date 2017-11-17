let app = angular.module('root', []);

app.controller('index', ['$scope', function($scope){
	$scope.message = 'Hello World';
	$scope.names = [];
	$scope.add = function(){
		$scope.names.push({fname: $scope.fname, lname: $scope.lname})
	}
	$scope.listName = function(fname, lname){
		return fname + " " + lname;
	}
}]);