'use strict';
var React = require('react');

module.exports = React.createClass({
	render: function () {
		return (
			<html>
			<head>
				<meta charSet="utf-8" />
				<title>Markdown Editor on Fluxible</title>
				<link href="css/app.css" rel="stylesheet" />
			</head>
			<body>
				<span id="app">
					<div dangerouslySetInnerHTML={{__html: this.props.markup}}></div>
				</span>
			</body>
			<script dangerouslySetInnerHTML={{__html: this.props.state}}></script>
			<script src="build/bundle.js" defer></script>
			</html>
		);
	}
});
