
window.registration = function($scope,$http){
    $scope.postdata = function(even){
        var data={
        username: $scope.taikhoan,
        password: $scope.matkhau,
        fullname: $scope.hovaten,
        email: $scope.email,
        gender: "true",
        birthday: $scope.ngaysinh,
        schoolfee: "1500000",
        marks: "0"
        }
        

        $http.post("http://localhost:3000/students",data).then(function(res){
            $scope.account = res.data;
            alert("")
        },function(error){
            alert("Sai")
        }
        )
    }
}