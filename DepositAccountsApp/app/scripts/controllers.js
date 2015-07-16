(function () {
  'use strict';

  angular.module('app.controllers', ['app.services']);

  function AccountListCtrl(Account) {
    this.accounts = Account.query();
  }

  function AccountDetailCtrl ($routeParams, Account) {
    this.account = {};

    var self = this;  // Para guardar la referencia

    Account.query({ id: $routeParams.accountId })
      .$promise.then(
          // Success
          function (data) {
            self.account = data[0];
          },
          // Error
          function (error) {
            console.log('ERROR: ' + error);
          }
        );
  }

  function AccountCreateCtrl (Account) {
    var self = this;

    this.create = function () {
      Account.save(self.post);
    };
  }

  angular
    .module('app.controllers')
    .controller('AccountListCtrl', AccountListCtrl)
    .controller('AccountDetailCtrl', AccountDetailCtrl)
    .controller('AccountCreateCtrl', AccountCreateCtrl);

})();
