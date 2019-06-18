var resolveProp = require('postcss-resolve-prop');
var parseCssFont = require('parse-css-font');
var unquote = require('unquote');
var t = require('tcomb-postcss');

var helpers = {};

[
	'style',
	'variant',
	'weight',
	'stretch',
	'size'
].forEach(function(prop) {
	helpers[prop] = t.func(t.Rule, t.Any).of(
		function(rule) {
			return resolveProp(rule, 'font-' + prop, {
				parsers: {
					font: function(value) {
						return parseCssFont(value)[prop];
					}
				}
			});
		}
	);
});

helpers.family = t.func(t.Rule, t.Any).of(
	function(rule) {
		return resolveProp(rule, 'font-family', {
			parsers: {
				font: function(value) {
					return parseCssFont(value).family;
				},
				'font-family': parseFontFamily
			}
		});
	}
);

function parseFontFamily(value) {
	return value.split(/\s*,\s*/).map(unquote);
}

helpers.lineHeight = t.func(t.Rule, t.Any).of(
	function(rule) {
		return resolveProp(rule, 'line-height', {
			parsers: {
				font: function(value) {
					return parseCssFont(value).lineHeight;
				},
				'line-height': parseLineHeight
			}
		});
	}
);

function parseLineHeight(value) {
	var parsed = parseFloat(value);
	if (parsed.toString() === value) {
		return parsed;
	}
	return value;
}

module.exports = t.func(t.Rule, t.Object).of(
	function(rule) {
		return resolveProp(rule, 'font', {
			isObjectMode: true,
			parsers: {
				font: function(value) {
					return parseCssFont(value);
				},
				'font-style': function(value) {
					return { style: value };
				},
				'font-variant': function(value) {
					return { variant: value };
				},
				'font-weight': function(value) {
					return { weight: value };
				},
				'font-stretch': function(value) {
					return { stretch: value };
				},
				'font-size': function(value) {
					return { size: value };
				},
				'font-family': function(value) {
					return { family: parseFontFamily(value) };
				},
				'line-height': function(value) {
					return { lineHeight: parseLineHeight(value) };
				}
			}
		});
	}
);

Object.keys(helpers).forEach(function(key) {
	module.exports[key] = helpers[key];
});
