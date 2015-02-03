'use strict';

var app = exports = module.exports = {};

app.hello = function(name) {
	
	return 'Hello ' + name + '!';
};

app.makeGreetings = function(names) {
	var allGreetings = [];
	if (names.length > 0) {
		for ( var i = 0; i < names.length; i++ ) {
			if (typeof names[i] !== 'string' || names[i].length < 2) {
				allGreetings.push('Argument ' + (i+1) + ' is not a name.');
			} else {
				allGreetings.push(app.hello(names[i]));
			}
		}
	} else {
		return 'No names given.';
	}
	
	return allGreetings;
};

app.logGreetings = function(arr) {
	for (var i = 0; i < arr.length; i++) {
		console.log(arr[i]);
	}
};
