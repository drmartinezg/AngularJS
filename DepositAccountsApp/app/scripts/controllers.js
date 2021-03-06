(function () {
  'use strict';

  angular.module('app.controllers', ['app.services']);

  function AccountListCtrl($location, Account) {
    this.accounts = [];
    this.error = '';

    var self = this;  // Para guardar la referencia

    Account.query()
      .$promise.then(
          // Success
          function (accounts) {
            self.accounts = accounts;
          },
          // Error
          function (error) {
            self.error = 'Error al obtener las cuentas de depósito - ' + error.statusText;
            console.log('ERROR: ' + error);
          }
        );

    this.new = function() {
      $location.path('/new');
    };

  }

  function AccountDetailCtrl ($location, $routeParams, Account) {
    this.account = {};
    this.message = '';

    var self = this;  // Para guardar la referencia

    Account.get({ id: $routeParams.accountId })
      .$promise.then(
          // Success
          function (account) {
            self.account = account;
          },
          // Error
          function (error) {
            self.message = 'Error al obtener la cuenta - ' + error;
            console.log('ERROR: ' + error);
          }
        );

    this.update = function () {
      Account.update({ id: $routeParams.accountId }, self.account)
      .$promise.then(
          // Success
          function (data) {
            self.account.id = data.id;
            self.message = 'Cuenta con id ' + data.id + ' actualizada correctamente';
          },
          // Error
          function (error) {
            self.message = 'Error al actualizar la cuenta - ' + error;
            console.log(self.message);
          }
        );
    };

    this.back = function() {
      $location.path('/');
    };

  }

  function AccountCreateCtrl ($location, Account) {
    this.message = '';
    var self = this;

    this.create = function () {
      Account.save(self.account)
      .$promise.then(
          // Success
          function (data) {
            self.account.id = data.id;
            self.message = 'Cuenta con id ' + data.id + ' creada correctamente';
            self.account = {};
          },
          // Error
          function (error) {
            self.message = 'Error al crear cuenta ' + error;
            console.log(self.message);
          }
        );
    };

    this.back = function() {
      $location.path('/');
    };

  }

  function MainController($rootScope, $scope, $route, $routeParams, $location) {
    // $scope.$route = $route;
    // $scope.$location = $location;
    // $scope.$routeParams = $routeParams;
    // console.log('MainController', $scope, $route, $routeParams, $location);
    $rootScope.$on('$routeChangeError', function(event, current, previous, rejection) {
        console.log('--> $routeChangeError', event, current, previous, rejection);
        $location.path('/');
    });
  }

  angular
    .module('app.controllers')
    .controller('MainController', MainController)
    .controller('AccountListCtrl', AccountListCtrl)
    .controller('AccountDetailCtrl', AccountDetailCtrl)
    .controller('AccountCreateCtrl', AccountCreateCtrl);

})();
