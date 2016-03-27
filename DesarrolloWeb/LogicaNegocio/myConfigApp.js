(function(myApp, undefined) {
	myApp.config(function(myConstant, myProviderProvider) {
		myProviderProvider.setHello('Hola Mundo');
	});
}(angular.module('myApp')));