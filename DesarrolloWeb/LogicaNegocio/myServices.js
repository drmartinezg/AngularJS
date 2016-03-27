(function(myApp, undefined) {
	myApp.factory('myFactory', function($http) {
		return {
			helloWorld: function() {
				return "Hello World desde factoria";
			}
		};
	});

	myApp.service('myService', function($http) {
		this.helloWorld = function() {
			return "Hello World desde servicio";
		}
	});

	myApp.provider('myProvider', function() {

		var _hello;
		function helloWorld() {
			return (_hello || '') + " desde provider";
		}

		this.setHello = function(hello) {
			_hello = hello;
		}
		myProvider.$inject = ['$http']
		function myProvider(http) {
			return {
				helloWorld: helloWorld
			}
		}
		this.$get = myProvider;
	});

	myApp.factory('myFactoryNoSingleton', function($http) {

		function noSingleton(name) {
			this.name = name;
		}
		noSingleton.prototype.helloWorld = function() {
			console.log(this, name + "desde una factoria no singleton");
		}
		return noSingleton
	});

}(angular.module('myApp')));