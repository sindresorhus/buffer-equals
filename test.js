'use strict';
var assert = require('assert');
var test = require('ava');
var bufferEquals = require('./');

test(function (t) {
	var a = new Buffer('abcdf');
	var b = new Buffer('abcdf');
	var c = new Buffer('abcde');
	var d = new Buffer('abcdef');

	t.assert(bufferEquals(a, b));
	t.assert(!bufferEquals(b, c));
	t.assert(!bufferEquals(c, d));
	t.assert(bufferEquals(a, a));

	t.assert(!bufferEquals(new Buffer('abc'), new Buffer('a0c')));

	assert.throws(function() {
		bufferEquals(new Buffer(1), 'abc');
	});

	t.end();
});
