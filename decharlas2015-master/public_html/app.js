var app = angular.module("app", ['ngRoute']);


app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({
                  redirectTo: '/issue/list'
        });
    }]);
