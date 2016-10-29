var app=angular.module("myapp",[]);
app.controller("mycontroller",["$scope","$http", function($scope,$http)
{
var refresh= function(){
$http.get("./contactlist").success(function(response){
$scope.contactlist=response;
$scope.contact="";

});
}
refresh();

$scope.addContact=function(){
	$http.post("/contactlist", $scope.contact).success(function(response){
		console.log("inserted");
		refresh();
	})
}

$scope.editContact=function(id)
{
	//console.log(id);
$http.get("/contactlist/" + id).success(function(response){
	$scope.contact=response;

})
}
$scope.updateContact= function(){
$http.put("/contactlist/" + $scope.contact._id, $scope.contact).success(function(response){
	refresh();
})

}

$scope.removeContact=function(id)
{
	$http.delete("/contactlist/" + id).success(function(response){
		refresh();
	})
}


}]);