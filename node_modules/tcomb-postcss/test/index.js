var tape = require('tape');
var tcomb = require('..');
var postcss = require('postcss');

var root = postcss.parse('a{}');
var rule = root.first;
var atrule = postcss.parse('@a{}').first;
var decl = postcss.parse('a{foo:bar}').first.first;
var comment = postcss.parse('/* foo */').first;

tape('t.Root', function(t) {
	t.ok(
		tcomb.Root.is(root),
		'should check a root node as a PostCSS#Root'
	);

	t.end();
});

tape('t.Rule', function(t) {
	t.ok(
		tcomb.Rule.is(rule),
		'should check a rule as a PostCSS#Rule'
	);

	t.end();
});

tape('t.AtRule', function(t) {
	t.ok(
		tcomb.AtRule.is(atrule),
		'should check an at-rule as a PostCSS#AtRule'
	);

	t.end();
});

tape('t.Container', function(t) {
	t.ok(
		tcomb.Container.is(root),
		'should check a root node as a PostCSS#Container'
	);
	t.ok(
		tcomb.Container.is(rule),
		'should check a rule as a PostCSS#Container'
	);
	t.ok(
		tcomb.Container.is(atrule),
		'should check an at-rule as a PostCSS#Container'
	);

	t.end();
});

tape('t.Decl', function(t) {
	t.ok(
		tcomb.Decl.is(decl),
		'should check a declaration as a PostCSS#Declaration'
	);

	t.end();
});

tape('t.Comment', function(t) {
	t.ok(
		tcomb.Comment.is(comment),
		'should check a comment as a PostCSS#Comment'
	);

	t.end();
});
