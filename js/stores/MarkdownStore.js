'use strict';
var createStore = require('fluxible/addons').createStore;
var marked = require('marked');

var MarkdownStore = createStore({
	storeName: 'MarkdownStore',

	handlers: {
		'MARKDOWN_UPDATE': 'updateMarkedText'
	},

	initialize: function () {
		this.markedText = '';
	},

	getMarkedText: function () {
		return this.markedText;
	},

	updateMarkedText: function (text) {
		if (text) {
			this.markedText = marked(text);
		} else {
			this.markedText = '';
		}
		this.emitChange();
	},

	dehydrate: function () {
		return {
			markedText: this.markedText
		};
	},

	rehydrate: function (state) {
		this.markedText = state.markedText;
	}
});

module.exports = MarkdownStore;
