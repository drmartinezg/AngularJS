var app = angular.module("app", ["ngRoute"]);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/',
      {
        templateUrl: "app.html",
        controller: "ViewCtrl",
      })
      .when('/new',
      {
        templateUrl: 'new.html',
        controller: "NewCtrl",
        resolve: {
            loadData: viewCtrl.loadData
        }
      })
});

app.controller("AppCtrl", function($scope, $rootScope, $route, $location) {
    $rootScope.$on("$routeChangeStart", function(event, current, previous, resolve) {
        console.log("--> $routeChangeStart", $scope, $rootScope, $route, $location);
    });
    $rootScope.$on("$routeChangeSuccess", function(event, current, previous, resolve) {
        console.log("--> $routeChangeSuccess", $scope, $rootScope, $route, $location);
    });
});

var viewCtrl = app.controller("ViewCtrl", function($scope, $route, $location) {
    $scope.changeRoute = function() {
        console.log("--> ViewCtrl.changeRoute()", $scope);
        $location.path("/new");
    }
});

app.controller("NewCtrl", function($scope, loadData, $template) {
    console.log("--> NewCtrl", $scope, loadData, $template);
});

viewCtrl.loadData = function($q, $timeout) {
    var defer = $q.defer();
    $timeout(function() {
        defer.resolve({message: "success"});
    }, 500);
    return defer.promise;
}