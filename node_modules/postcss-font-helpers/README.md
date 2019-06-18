# postcss-font-helpers

<img align="right" width="135" height="95"
	title="Philosopher’s stone, logo of PostCSS"
	src="http://postcss.github.io/postcss/logo-leftp.png">

[![NPM version](http://img.shields.io/npm/v/postcss-font-helpers.svg?style=flat)](https://www.npmjs.org/package/postcss-font-helpers)
[![npm license](http://img.shields.io/npm/l/postcss-font-helpers.svg?style=flat-square)](https://www.npmjs.org/package/postcss-font-helpers)
[![Travis Build Status](https://img.shields.io/travis/jedmao/postcss-font-helpers.svg?label=unix)](https://travis-ci.org/jedmao/postcss-font-helpers)

[![npm](https://nodei.co/npm/postcss-font-helpers.svg?downloads=true)](https://nodei.co/npm/postcss-font-helpers/)

Font helpers for [PostCSS](https://github.com/postcss/postcss).

## Installation

```
$ npm install postcss-font-helpers [--save[-dev]]
```

## Usage

```js
var postcss = require('postcss');
var font = require('postcss-font-helpers');

var rule = postcss.parse([
	'a {',
	'  line-height: 1;',
	'  font: 1rem/1.2 serif;',
	'  font-size: .8rem;',
	'}'
].join('')).first;

// Get all props
font(rule); /*
{
	size: ".8rem",
	line-height: 1.2,
	family: ["serif"]
}
*/

// Get individual props
font.lineHeight(rule); // 1.2
font.size(rule);       // ".8rem"
font.family(rule);     // ["serif"]
```

See [the tests](https://github.com/jedmao/postcss-font-helpers/blob/master/test/index.js) for more scenarios.

## Testing

```
$ npm test
```

This will run tests and generate a code coverage report. Anything less than 100% coverage will throw an error.
