
IssueListController.$inject=['$scope','issueRepository'];
function IssueListController($scope,issueRepository) {
    
    $scope.issueStates=[
        {
            id:"open",
            name:"Abiertos"
        },
        {
            id:"closed",
            name:"Cerrados"
        }, 
        {
            id:"all",
            name:"Todos"
        }        
    ];
    $scope.issueState="all";
    
    $scope.orderProperties=[
        {
            id:"number",
            name:"Número"
        },
        {
            id:"title",
            name:"Título"
        }, 
        {
            id:"user.login",
            name:"Usuario"
        }        
    ];
    $scope.orderProperty="number";
    
    
    $scope.find=function() {
        var promise=issueRepository.find($scope.issueState);
        promise.then(function(response){
            $scope.issues=response.data;
        },function(response) {
            alert("Fallo la petición:" + response.status);
        });
    };
    
    $scope.$watch("issueState",function(newIssueState,oldIssueState) {
        if (newIssueState===oldIssueState) {
            return;
        }
        
        $scope.find();
        
    });
    
    $scope.find();
    
}

app.controller("IssueListController",IssueListController);
