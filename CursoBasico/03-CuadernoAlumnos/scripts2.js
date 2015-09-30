
function AlumnosController($scope) {
	$scope.alumnos = [
		{nombre: "JUAN Blanco", telefono: "1234567890",	curso: "Segundo ESO"},
		{nombre: "rOsA Luxemburgo", telefono: "0987654321", curso: "Primero ESO"},
		{nombre: "Alberto Herrera", telefono: "1122334455", curso: "Segundo ESO"},
		{nombre: "Ana MariÑo", telefono: "6677889900", curso: "Tercero ESO"}
	];

	$scope.Save=function() {
		$scope.alumnos.push({nombre: $scope.nuevoAlumno.nombre,
							 telefono: $scope.nuevoAlumno.telefono,
							 curso: $scope.nuevoAlumno.curso});

		$scope.formVisibility=false;
	}

	$scope.formVisibility=false;

	$scope.ShowForm=function() {
		$scope.formVisibility=true;
		console.log($scope.formVisibility);
	}

}

angular.module('app', ['filters']).controller('AlumnosController', AlumnosController);

angular.module('filters', []).filter('titleCase', function() {
	return function(val) {
		return val ? val.replace(/\w\S*/g, function(txt) {
			return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
		}) : val;
	};
});
