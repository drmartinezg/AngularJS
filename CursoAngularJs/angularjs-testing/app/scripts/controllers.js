(function () {
  'use strict';

  angular.module('app.controllers', ['ngMessages', 'app.services']);

  function UserController() {
    this.user = {};
    this.error = '';

    var self = this;  // Para guardar la referencia

    this.update = function() {
      console.log(self.user);
    };

    this.reset = function (form) {
      self.user = {};
      console.log(self.user);
      if (form) {
        form.$setPristine();
        form.$setUntouched();
      }
    };

    self.reset();

  }


  function MainController($rootScope, $scope, $route, $routeParams, $location) {
    $rootScope.$on('$routeChangeError', function(event, current, previous, rejection) {
        console.log('--> $routeChangeError', event, current, previous, rejection);
        $location.path('/');
    });
  }

  angular
    .module('app.controllers')
    .controller('MainController', MainController)
    .controller('UserController', UserController);

})();
