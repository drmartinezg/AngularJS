(function () {
  'use strict';

  angular.module('cuentaClic', []);

  function cuentaClicController() {
  	var vm = this;
  	vm.clics = 0;

  	vm.incrementa = function() {
  		vm.clics++;
  	}
  }

  var cuentaClic = {
	templateUrl: "./js/components/cuenta-clic/cuenta-clic.html",
	controller: "cuentaClicController"
  };

  angular
    .module('cuentaClic')
    .controller('cuentaClicController', cuentaClicController)
    .component('cuentaClic', cuentaClic);

})();