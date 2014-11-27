'use strict';

describe('Controller: TareasCtrl', function () {

  // load the controller's module
  beforeEach(module('listaTareasApp'));

  var TareasCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TareasCtrl = $controller('TareasCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of tareas to the scope', function () {
    expect(scope.tareas.length).toBe(2);
  });
});
