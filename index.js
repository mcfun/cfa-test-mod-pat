'use strict';

var greet = require('./lib/greet.js');

console.log(greet.hello('nancy'));

process.argv.forEach(function(a) {
	console.log(a);
});
