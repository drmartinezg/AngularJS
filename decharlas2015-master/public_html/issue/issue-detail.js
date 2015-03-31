
IssueDetailController.$inject=['$scope','$routeParams','issueRepository'];
function IssueDetailController($scope,$routeParams,issueRepository) {
    
    $scope.number=$routeParams.number;
    
    $scope.get=function(number) {
        
        var promise=issueRepository.get(number);
        
        promise.then(function(response){
            $scope.issue=response.data;
        },function(response) {
            alert("Fallo la petición:" + response.status);
        });
        
    };
    
    $scope.get($scope.number);
    
}

app.controller("IssueDetailController",IssueDetailController);
