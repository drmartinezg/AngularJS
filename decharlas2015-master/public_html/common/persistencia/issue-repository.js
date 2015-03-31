
IssueRepository.$inject=['$http'];
function IssueRepository($http) {
    
    
    this.find=function(state) {
        
        var config = {
          method: "GET",
          url: "https://api.github.com/repos/angular/angular.js/issues?state=" + state
        };

        var promise = $http(config);

        return promise;
        
    };
    
    this.get=function(number) {
        
        var config = {
          method: "GET",
          url: "https://api.github.com/repos/angular/angular.js/issues/" + number
        };

        var promise = $http(config);

        return promise;
        
    };    
    
}

app.service("issueRepository",IssueRepository);