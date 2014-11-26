'use strict';

/**
 * @ngdoc function
 * @name listaTareasApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the listaTareasApp
 */
angular.module('listaTareasApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
