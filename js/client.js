'use strict';
var React = require('react');
var app = require('./app');

window.React = React;

app.rehydrate(window.App, function (err, context) {
	window.context = context;

	React.render(
		context.createElement(), 
		document.getElementById('app')
	);
});
