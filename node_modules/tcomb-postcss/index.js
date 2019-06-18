var t = require('tcomb');

t.Root = t.irreducible('PostCSS#Root', function(node) {
	return node.type === 'root';
});

t.Rule = t.irreducible('PostCSS#Rule', function(node) {
	return node.type === 'rule';
});

t.AtRule = t.irreducible('PostCSS#AtRule', function(node) {
	return node.type === 'atrule';
});

t.Container = t.irreducible('PostCSS#Container', function(node) {
	return t.Rule.is(node) || t.AtRule.is(node) || t.Root.is(node);
});

t.Decl = t.irreducible('PostCSS#Declaration', function(node) {
	return node.type === 'decl';
});

t.Comment = t.irreducible('PostCSS#Comment', function(node) {
	return node.type === 'comment';
});

module.exports = t;
