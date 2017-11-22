let app = angular.module('root', [])
    .controller('index', ['$scope', function($scope){
        $scope.list = [{name:'Scott', age: 29},
                       {name:'James',age:22},
                       {name:'Ross',age:31},
                       {name:'Ben',age:39},
                       {name:'Kevin',age:19}];
                       
        $scope.addPerson = function(){
            $scope.list.push({name: $scope.name, age: $scope.age});
            $scope.name = '';
            $scope.age = 0;
        };
    }]);