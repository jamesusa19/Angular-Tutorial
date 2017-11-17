let app = angular.module('root', []);

app.controller('index', ['$scope', function($scope){
	$scope.message = 'Hello World';
	$scope.names = ['Jane', 'Jeff', 'Joey'];
}]);