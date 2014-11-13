var provinciasGlobal=[
    {
      idProvincia:2,
      nombre:"Castellon"
    },
    {
      idProvincia:3,
      nombre:"Alicante"
    },
    {
      idProvincia:1,
      nombre:"Valencia"
    },
    {
      idProvincia:7,
      nombre:"Teruel"
    },  
    {
      idProvincia:5,
      nombre:"Tarragona"
    }
  ];


var app = angular.module("app", []);

app.controller("PruebaController", function($scope) {
  $scope.provincias = provinciasGlobal;
    
  $scope.miProvinciaSeleccionada={
      idProvincia:3,
      nombre:"Alicante"
    }

});

app.controller("PruebaController2", function($scope) {
  $scope.provincias=[
    {
      idProvincia:2,
      nombre:"Castellon"
    },
    {
      idProvincia:3,
      nombre:"Alicante"
    },
    {
      idProvincia:1,
      nombre:"Valencia"
    },
    {
      idProvincia:7,
      nombre:"Teruel"
    },  
    {
      idProvincia:5,
      nombre:"Tarragona"
    }
  ];
    
  $scope.miProvinciaSeleccionada={
      idProvincia:3,
      nombre:"Alicante"
    }

});