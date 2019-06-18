var t = require('tcomb-postcss');

module.exports = t.func([t.Container, t.Func], t.Nil)
	.of(function(container, callback) {
		container.each(function(node) {
			if (node.type === 'decl') {
				callback(node);
			}
		});
	});
