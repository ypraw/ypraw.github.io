# postcss-each-decl

<img align="right" width="135" height="95"
	title="Philosopher’s stone, logo of PostCSS"
	src="http://postcss.github.io/postcss/logo-leftp.png">

[![NPM version](http://img.shields.io/npm/v/postcss-each-decl.svg?style=flat)](https://www.npmjs.org/package/postcss-each-decl)
[![npm license](http://img.shields.io/npm/l/postcss-each-decl.svg?style=flat-square)](https://www.npmjs.org/package/postcss-each-decl)
[![Travis Build Status](https://img.shields.io/travis/jedmao/postcss-each-decl.svg?label=unix)](https://travis-ci.org/jedmao/postcss-each-decl)
[![AppVeyor Build Status](https://img.shields.io/appveyor/ci/jedmao/postcss-each-decl.svg?label=windows)](https://ci.appveyor.com/project/jedmao/postcss-each-decl)

[![npm](https://nodei.co/npm/postcss-each-decl.svg?downloads=true)](https://nodei.co/npm/postcss-each-decl/)

[PostCSS](https://github.com/postcss/postcss) helper method to shallowly iterate over each declaration.

## Introduction

Ever since PostCSS 5.0, a [container](https://github.com/postcss/postcss/blob/master/docs/api.md#containers-common-methods) method called [`walkDecls`](https://github.com/postcss/postcss/blob/master/docs/api.md#containerwalkdeclspropfilter-callback) traverses the container's descendant nodes, calling a callback function for each declaration node found. Conversely, this project exposes a simple function that shallowly iterates over a container's direct child nodes, using no recursion.

```js
const rule = postcss.parse(`
	a {
		foo: FOO;
		bar: BAR;
		b {
			baz: BAZ;
		}
		qux: QUX;
`).first;

eachDecl(rule, decl => {
	console.log(decl.prop, decl.value);
});
```

The above example outputs the following:

```
foo FOO
bar BAR
qux QUX
```

## Installation

```
$ npm install postcss-each-decl
```

## Usage

```js
var postcss = require('postcss');
var eachDecl = require('postcss-each-decl');

var rule = postcss.parse('a{foo:bar}').first;
eachDecl(rule, function(decl) {
	console.log(decl.prop, decl.value); // foo bar
});
```
