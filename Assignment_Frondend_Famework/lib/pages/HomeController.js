window.HomeController =  function($scope,$http){
    $scope.subjects = [];
    $scope.keyword = "";

    $scope.changeKeyword = function(){
        $http.get(`${subjectApiUrl}?Name_like=${$scope.keyword}`)
        .then(function(response){
            if(response.statusText == "OK"){
                $scope.subjects = response.data;
            }
        })
        // aaa
    }
    $http.get(subjectApiUrl).then(function(response){
        if(response.statusText == "OK"){
            $scope.subjects = response.data;
        }
    })
}