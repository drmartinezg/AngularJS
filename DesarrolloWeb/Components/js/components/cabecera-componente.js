(function () {
  'use strict';

  angular.module('cabeceraComponente', []);


  var cabeceraComponente = {
	template: "<h1>Mi página</h1><nav>enlace1 | enlace2</nav>"
  };

  angular
    .module('cabeceraComponente')
    .component('cabeceraComponente', cabeceraComponente);

})();