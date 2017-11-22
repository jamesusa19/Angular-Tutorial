let app = angular.module('root', [])
    .controller('index', ['$scope', function($scope){
        $scope.message = 'Hello World';
        $scope.names = [];
        $scope.add = function(){
            $scope.names.push({fname: $scope.fname, lname: $scope.lname})
        }
        $scope.listName = function(fname, lname){
            return fname + " " + lname;
        }
        $scope.list = [{name:'Scott', age: 29},
                       {name:'James',age:22},
                       {name:'Ross',age:31},
                       {name:'Ben',age:39},
                       {name:'Kevin',age:19}];
    }]);