'use strict';

var expect = require('chai').expect;
var greet = require('../lib/greet');
var makeGreetings = greet.makeGreetings;

describe('assuring proper output of greet', function() {
	it('should return a greeting with a passed string as a name', function() {
		expect(greet.hello('bob')).to.eql('Hello bob!');
	});
	it('should not be empty', function() {
		expect(greet.hello('Ian')).to.not.eql('');
	});
	it('should be formatted correctly', function() {
		expect(greet.hello('Richard')).to.eql('Hello Richard!');
	});
});

describe('assure proper output of makeGreetings', function() {
	it('should send out mutiple greetings', function() {
		expect(makeGreetings(['Ian', 'Richard'])).to.eql(['Hello Ian!', 'Hello Richard!']);
	});
	it('should handle non-names an notify user', function(){
		expect(makeGreetings(['Bob', 4, 'Ron'])).to.eql(['Hello Bob!', 'Argument 2 is not a name.', 'Hello Ron!']);
	});
	it('should handle no names', function() {
		expect(makeGreetings([])).to.eql('No names given.');
	});

});
