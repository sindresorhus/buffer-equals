import test from 'ava';
import m from './';

test(t => {
	const a = new Buffer('abcdf');
	const b = new Buffer('abcdf');
	const c = new Buffer('abcde');
	const d = new Buffer('abcdef');

	t.true(m(a, b));
	t.false(m(b, c));
	t.false(m(c, d));
	t.true(m(a, a));
	t.false(m(new Buffer('abc'), new Buffer('a0c')));
	t.throws(() => m(new Buffer(1), 'abc'));
});
