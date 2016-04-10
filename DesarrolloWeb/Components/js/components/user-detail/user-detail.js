(function () {
  'use strict';

  angular.module('userDetail', []);

  function userDetailController() {
    var vm = this;

    vm.cambiarEmail = function() {
      vm.usuario.email = "prueba@gmail.com";
    }

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