/////////////////////////////////////////////////////////////////
// Ejemplo procesanado un array

var zfighters = ['Goku', 'Vegeta', 'Gohan', 'Piccolo'];

zfighters.forEach(function (name, index) {
	console.log(index + 1 + ', ' + name);
})
// 1. Goku
// 2. Vegeta
// 3. Gohan
// 4. Piccolo

////////////////////////////////////////////////////////////////
// Callbacks con funciones con nombre

var allUsers = [];

function logStuff(data) {
	if ('string' == typeof data) return console.log(data);

	if ('object' == typeof data) {
		for (var key in data) {
			console.log(key + ': ' + data[key]); 
		}
	}
}

function getInput(input, callback) {
	allUsers.push(input);
	
	('function' == typeof callback && callback(input));
}

getInput({user: 'drmartinezg', speciality: 'JavaScript'}, logStuff);