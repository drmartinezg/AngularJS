app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/issue/list', {
            templateUrl: 'issue/issue-list.html'
        });

        $routeProvider.when('/issue/detail/:number', {
            templateUrl: 'issue/issue-detail.html'
        });
    }]);
