'use strict';

var expect = require('chai').expect;
var greeting = require('../lib/greet');

describe('assuring proper output of greet', function() {
	it('should return a greeting with a passed string as a name', function() {
		expect(hello('bob')).to.eql('Hello bob!');
		expect(hello('Deckard').to.not.eql('HelloDeckard!');
	});
});
