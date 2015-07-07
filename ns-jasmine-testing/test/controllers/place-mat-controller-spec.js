describe('PlaceMatController', function() {
	var $rootScope,
	    $scope,
	    $controller,
	    controller;

        beforeEach(function() {
	    	module.apply(this, Dessert.Dependencies);

	    	inject(function($injector) {
		    	$rootScope = $injector.get('$rootScope');
		    	$scope = $rootScope.$new();
		    	$controller = $injector.get('$controller');
		    	var parent = $controller('TableController', {$scope: $scope});
		    	$scope = $scope.$new();
		    	controller = $controller('PlaceMatController', {$scope: $scope});
	    	});
	    });

/*
	    describe('Initialization', function() {
	    	it('Should set $scope.fork to Fork', function() {
	    		expect($scope.fork).toEquals("Fork");
	    	});

	    	it('Should set $scope.spoon to Spoon', function() {
	    		expect($scope.spoon).toEquals("Spoon");
	    	});

	    	it('Should set $scope.knife to Knife', function() {
	    		expect($scope.knife).toEquals("Knife");
	    	});
	    });
*/	    
});