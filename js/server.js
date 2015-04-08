require('babel/register');
var express = require('express');
var serialize = require('serialize-javascript');
var React = require('react');
var app = require('./app');
var MarkdownAction = require('./actions/MarkdownAction');
var HtmlComponent = React.createFactory(require('./components/Html.jsx'));

var server = express();
server.use(express.static('./'));

server.use(function (req, res, next) {
	var context = app.createContext();
	context.executeAction(MarkdownAction, {}, function (err) {
		var html = React.renderToStaticMarkup(HtmlComponent({
			state: 'window.App=' + serialize(app.dehydrate(context)) + ';',
			markup: React.renderToString(context.createElement())
		}));

		res.send(html);
	});
});

var port = process.env.PORT || 3000;
server.listen(port);
console.log('Listening on port ' + port);
