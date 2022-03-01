window.UserLogin = function($scope,$http){
    $http.get("http://localhost:3000/students").then(function(response){
        $scope.students = response.data;
        $scope.login = function(){
            for(var i = 0; i<$scope.students.length; i++) {
                if($scope.username == $scope.students[i].username && $scope.password == $scope.students[i].password){
                    window.location.href="index.html#!/khoa-hoc";
                }
            }
        }
        
    })
}