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
			text: '¡Practica algún deporte todos los días!'
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

  	// Modelo para los tres bloques de contenidos
  	var baseURL = 'http://lorempixel.com/200/200/';
  	$scope.contenido = [
		{
			img: baseURL + 'people',
			title: 'Sobre nosotros',
			sumario: 'Somos una empresa comprometida con la vida sana'
		},
		{
			img: baseURL + 'business',
			title: 'Nuestros Servicios',
			sumario: 'Ofrecemos asesoría profesional para mantenerse Sanos, buena alimentación, cuales son los mejores ejercicios para tí, etc.'
		},
		{
			img: baseURL + 'transport',
			title: 'Contáctanos',
			sumario: '#333, Buena vida Online, Plaza Central, Durance, Zip-432167'
		}
  	];

  });
