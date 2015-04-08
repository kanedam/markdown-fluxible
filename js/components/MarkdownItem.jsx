'use strict';
var React = require('react');
var MarkdownStore = require('../stores/MarkdownStore');
var FluxibleMixin = require('fluxible').FluxibleMixin;

module.exports = React.createClass({
	mixins: [FluxibleMixin],

	getInitialState: function () {
		return {markedText: this.getStore(MarkdownStore).getMarkedText()};
	},

	componentDidMount: function () {
		this.getStore(MarkdownStore).addChangeListener(this._onChange);
	},

	componentWillUnmount: function () {
		this.getStore(MarkdownStore).removeChangeListener(this._onChange);
	},

	render: function () {
		return (
			<div dangerouslySetInnerHTML={{__html: this.state.markedText}} />
		);
	},

	_onChange: function () {
		this.setState({
			markedText: this.getStore(MarkdownStore).getMarkedText()
		});
	}
});
