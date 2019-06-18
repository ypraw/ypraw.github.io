# tcomb-postcss

<img align="right" width="135" height="95"
	title="Philosopher’s stone, logo of PostCSS"
	src="http://postcss.github.io/postcss/logo-leftp.png">

[![NPM version](http://img.shields.io/npm/v/tcomb-postcss.svg?style=flat)](https://www.npmjs.org/package/tcomb-postcss)
[![npm license](http://img.shields.io/npm/l/tcomb-postcss.svg?style=flat-square)](https://www.npmjs.org/package/tcomb-postcss)
[![Travis Build Status](https://img.shields.io/travis/jedmao/tcomb-postcss.svg?label=unix)](https://travis-ci.org/jedmao/tcomb-postcss)
[![AppVeyor Build Status](https://img.shields.io/appveyor/ci/jedmao/tcomb-postcss.svg?label=windows)](https://ci.appveyor.com/project/jedmao/tcomb-postcss)

[![npm](https://nodei.co/npm/tcomb-postcss.svg?downloads=true)](https://nodei.co/npm/tcomb-postcss/)

Extends the [`tcomb`](https://github.com/gcanti/tcomb) library with [`PostCSS`](https://github.com/postcss/postcss) irreducible node types.

The following types are added to tcomb:
- [`Container`](https://github.com/postcss/postcss/blob/master/lib/container.es6)
  - [`Root`](https://github.com/postcss/postcss/blob/master/lib/root.es6)
  - [`Rule`](https://github.com/postcss/postcss/blob/master/lib/rule.es6)
  - [`AtRule`](https://github.com/postcss/postcss/blob/master/lib/at-rule.es6)
- [`Decl`](https://github.com/postcss/postcss/blob/master/lib/declaration.es6)
- [`Comment`](https://github.com/postcss/postcss/blob/master/lib/comment.es6)

## Usage

```js
var t = require('tcomb-postcss');
var postcss = require('postcss');

var root = postcss.parse('a{}');
t.Root.is(root); // true
t.Rule.is(root.first); // true
t.AtRule.is(root.first); // false
```
