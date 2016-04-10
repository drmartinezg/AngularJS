(function () {
  'use strict';

  angular.module('userDetail', []);

  function userDetailController() {
    var vm = this;

  }

  var userDetail = {
    templateUrl: "./js/components/user-detail/user-detail.html",
    controller: "userDetailController",
    bindings: {
      usuario: "=",
      numero: "@"
    }
  };

  angular
    .module('userDetail')
    .controller('userDetailController', userDetailController)
    .component('userDetail', userDetail);

})();