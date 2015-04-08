var Dispatcher = require('dispatchr')();
var MarkdownStore = require('../stores/MarkdownStore');

Dispatcher.registerStore(MarkdownStore);

module.exports = Dispatcher;
