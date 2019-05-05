// CONTROLLERS
weatherApp.controller('homeController', ['$scope', '$location','$window','$resource','$http', function($scope,$location, $window,$resource,$http) {
     
//    $http.get('movies.json').success(function (data){
//        console.log('Data '+data);
//        $scope.movies = data;
//	});
   
    $scope.loading = true;
    $http.get('https://77ekm8oc2j.execute-api.us-east-1.amazonaws.com/live/').success(function (data){
        console.log('Data '+data);
        $scope.movies = data;
        $scope.loading = false;
	});
  
    
}]);



