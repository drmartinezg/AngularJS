const dc = [
	{ name: "batman", power: 100 },
	{ name: "superman", power: 90 },
	{ name: "greenarrow", power: 70 },
	{ name: "greenlantern", power: 70 }
];

/////////////////////////////////////////////////////////////////////////////
// Array.prototype.filter()
var filter = dc.filter(function(x) { return x.power === 70; });
console.log(filter);
//	[ 
//		{ name: 'greenarrow', power: 70 },
//		{ name: 'greenlantern', power: 70 } 
//	]

// ES2015 Arrow Functions =>
var filter = dc.filter((x) => { return x.power === 70; });
console.log(filter);
var filter = dc.filter(x => { return x.power === 70; });
console.log(filter);
var filter = dc.filter(x => x.power === 70 );
console.log(filter);

/////////////////////////////////////////////////////////////////////////////
// Lambda calculus
// x,y -> x + y
// x -> y -> x + y
// Arrow Functions
// x,y => x + y
// x => y => x + y

/////////////////////////////////////////////////////////////////////////////
// Array.prototype.forEach()
dc.forEach(x => console.log(x.name));
// > batman
// > superman
// > greenarrow
// > greenlantern

/////////////////////////////////////////////////////////////////////////////
// Array.prototype.map()
var map = dc.map(x => x.name );
console.log(map);
// > [ 'batman', 'superman', 'greenarrow', 'greenlantern' ]

/////////////////////////////////////////////////////////////////////////////
// Array.prototype.find()
// * ES2015 (ES6)
var find = dc.find(x => x.power === 90);
console.log(find);
// > Object {name: "superman", power: 90}

/////////////////////////////////////////////////////////////////////////////
// Array.prototypes.includes()
// String.prototypes.includes()
// * ES2016 (ES7)
var include = [1, 2, 3].includes(3);
console.log(include);
// > true

/////////////////////////////////////////////////////////////////////////////
// Array.prototypes.reduce()
var reduce = dc.reduce((x, y) => x.power > y.power ? x : y);
console.log(reduce);
// > Object {name: "batman", power: 100}

const a = [1 ,2, 3, 4, 5, 5, 3];
var reduce = a.reduce((x, y) => x + y, 0);
console.log(reduce);
// > 23

/////////////////////////////////////////////////////////////////////////////
// Array.prototypes.some()
var some = dc.some(x => x.name.startsWith('green'));
console.log(some);
// > true

/////////////////////////////////////////////////////////////////////////////
// Array.prototypes.every()
var every = dc.every(x => x.name.endsWith('man'));
console.log(every);
// > false

/////////////////////////////////////////////////////////////////////////////
// Chaining Functions
var chain = dc.map(x => x.name).includes('greenarrow');
console.log(chain);
// > true

