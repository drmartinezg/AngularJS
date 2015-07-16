(function () {
  'use strict';

  angular.module('app', ['ngRoute', 'app.controllers']);

  function config ($locationProvider, $routeProvider) {
//    $locationProvider.html5Mode(true);

    $routeProvider
      .when('/', {
        templateUrl: 'views/account-list.tpl.html',
        controller: 'AccountListCtrl',
        controllerAs: 'accountlist'
      })
      .when('/account/:accountId', {
        templateUrl: 'views/account-detail.tpl.html',
        controller: 'AccountDetailCtrl',
        controllerAs: 'accountdetail'
      })
      .when('/new', {
        templateUrl: 'views/account-create.tpl.html',
        controller: 'AccountCreateCtrl',
        controllerAs: 'accountcreate'
      });
  }

  angular
    .module('app')
    .config(config);

})();
