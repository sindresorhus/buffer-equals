'use strict';
module.exports = function (a, b) {
	if (!(a instanceof Buffer && b instanceof Buffer)) {
		throw new TypeError('Argument must be a Buffer');
	}

	if (typeof a.equals === 'function') {
		return a.equals(b);
	}

	if (a === b) {
		return true;
	}

	if (a.length !== b.length) {
		return false;
	}

	for (var i = 0; i < a.length; i++) {
		if (a[i] !== b[i]) {
			return false;
		}
	}

	return true;
};
