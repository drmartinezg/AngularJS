describe('TableController', function() {
	var $rootScope,
	    $scope,
	    dessertServiceSpy,
	    controller;

    beforeEach(function() {
    	module.apply(module, Dessert.Dependencies);

    	inject(function($injector) {
    		$rootScope = $injector.get('$rootScope');
    		$scope = $rootScope.$new();
    		dessertServiceSpy = spyOnAngularService($injector.get('DessertService'), 'getRemotePies', {name: "This is a pie!"});
    		controller = $injector.get('$controller')("TableController", {$scope: $scope});
    	});
    });
/*
    describe('Action Handlers', function() {
    	it('Should call the dessertService.getRemotePies method', function() {
    		$scope.setTable();
    		expect(dessertServiceSpy).toHaveBeenCalledWith();
    	});

    	it('Should set the pies to the result of the service call', function() {
    		$scope.setTable();
    		expect($scope.pies).toEqual({name: "This is a pie!"});
    	});
    });
    
    describe('Initialization', function() {
    	
    	it('Should instantiate pies to null', function() {
    		expect($scope.pies).toBeNull();
    	});
    });
*/
});