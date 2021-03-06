(function () {
  'use strict';

  angular.module('app.services', ['ngResource']);

  function Account ($resource, BaseUrl) {
    return $resource( BaseUrl + '/DepositAccounts/:id',
                      { accountId: '@_id'},
                      { 'update': { method: 'PUT' } }
    );
  }

  angular
    .module('app.services')
    .constant('BaseUrl', 'http://localhost:8080/DepositAccountsRestService/resources')
    .factory('Account', Account);

})();
