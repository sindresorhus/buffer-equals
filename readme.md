# buffer-equals [![Build Status](https://travis-ci.org/sindresorhus/buffer-equals.svg?branch=master)](https://travis-ci.org/sindresorhus/buffer-equals)

> Node.js 0.12 [`buffer.equals()`](https://nodejs.org/api/buffer.html#buffer_buf_equals_otherbuffer) ponyfill

> Ponyfill: A polyfill that doesn't overwrite the native method


## Install

```
$ npm install --save buffer-equals
```


## Usage

```js
var bufferEquals = require('buffer-equals');

bufferEquals(new Buffer('foo'), new Buffer('foo'));
//=> true

bufferEquals(new Buffer('foo'), new Buffer('bar'));
//=> false
```


## API

See the [`buffer.equals()` docs](https://nodejs.org/api/buffer.html#buffer_buf_equals_otherbuffer).


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
