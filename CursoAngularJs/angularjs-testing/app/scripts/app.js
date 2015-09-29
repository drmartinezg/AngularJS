(function () {
  'use strict';

  angular.module('app', ['ngRoute', 'app.controllers', 'app.templates']);

  function config ($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider
      .when('/', {
        templateUrl: 'views/user-form.tpl.html',
        controller: 'UserController',
        controllerAs: 'userctrl'
      })
      .when('/form1', {
        templateUrl: 'views/user-form.tpl.html',
        controller: 'UserController',
        controllerAs: 'userctrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

  angular
    .module('app')
    .config(config);

})();
