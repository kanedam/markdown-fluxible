'use strict';
module.exports = function (context, payload, done) {
	context.dispatch('MARKDOWN_UPDATE', payload.text);
	done();
};
