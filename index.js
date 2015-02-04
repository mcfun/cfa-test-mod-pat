'use strict';

var greet = require('./lib/greet.js');
var args = process.argv;
var peepsToGreet = [];

for ( var i = 2; i < args.length; i++) {
	peepsToGreet.push(args[i]);
}

greet.logGreetings(greet.makeGreetings(peepsToGreet));


//process.argv.forEach(function(a) {
//	console.log(a);
//});
