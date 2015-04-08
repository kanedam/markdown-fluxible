'use strict';
var React = require('react');
var Fluxible = require('fluxible');

var app = new Fluxible({
	component: React.createFactory(require('./components/MarkdownApp.jsx'))
});

app.registerStore(require('./stores/MarkdownStore'));

module.exports = app;
