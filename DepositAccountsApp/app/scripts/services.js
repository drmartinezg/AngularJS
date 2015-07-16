(function () {
  'use strict';

  angular.module('app.services', ['ngResource']);

  function Account ($resource, BaseUrl) {
    return $resource(BaseUrl + '/DepositAccounts/:accountId',
      { accountId: '@_id'}
    );
  }

  angular
    .module('app.services')
    .constant('BaseUrl', 'http://localhost:8080/DepositAccountsRestService/resources')
    .factory('Account', Account);

})();
