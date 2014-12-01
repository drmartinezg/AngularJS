'use strict';

/**
 * @ngdoc function
 * @name prototipoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the prototipoApp
 */
angular.module('prototipoApp')
  .controller('MainCtrl', function ($scope) {
  	var baseURL = 'http://lorempixel.com/960/450/';
  	$scope.setInterval = 5000;

  	$scope.slides = [
		{
			title: 'Aprender a mantenerte en forma',
			image: baseURL + 'sports/',
			text: '¡Practica algún deporte todos los días'
		},
		{
			title: 'Buena alimentación',
			image: baseURL + 'food/',
			text: '¡La importacia de frutas y verduras en la dieta!'
		},
		{
			title: 'En contacto con la naturaleza',
			image: baseURL + 'nature/',
			text: '¡Mantente en armonía con la naturaleza!'
		}
  	];
  });
