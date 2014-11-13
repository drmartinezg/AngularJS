(function(myApp, undefined) {
	myApp.controller('myController', function($scope, myValue, myConstant, myFactory, myService, myProvider, myFactoryNoSingleton) {
		$scope.factory = myFactory.helloWorld();
		$scope.service = myService.helloWorld();
		$scope.provider = myProvider.helloWorld();
		$scope.noSingleton = function() {
			var instance = new myFactoryNoSingleton("Hola Pedro");
			instance.helloWorld();

			var instance1 = new myFactoryNoSingleton("Hola Xavi");
			instance1.helloWorld();
		};
	});
}(angular.module('myApp')));