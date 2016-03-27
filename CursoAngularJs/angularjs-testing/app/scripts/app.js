(function () {
  'use strict';

  angular.module('app', ['ngRoute', 'ngMessages', 'app.controllers', 'app.templates']);

  function config ($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider
      .when('/', {
        templateUrl: 'views/user-form.tpl.html',
        controller: 'UserController',
        controllerAs: 'userctrl'
      })
      .when('/form2', {
        templateUrl: 'views/user-form2.tpl.html',
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
