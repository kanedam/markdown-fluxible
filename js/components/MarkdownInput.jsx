'use strict';
var React = require('react');
var MarkdownAction = require('../actions/MarkdownAction');
var FluxibleMixin = require('fluxible').FluxibleMixin;

module.exports = React.createClass({
	mixins: [FluxibleMixin],

	propTypes: {
		text: React.PropTypes.string
	},

	getInitialState: function () {
		// this.executeAction(MarkdownAction, {text: this.props.text});
		return {text: this.props.text};
	},

	componentDidMount: function () {
		this.executeAction(MarkdownAction, {text: this.props.text});
	},

	render: function () {
		return (
			<textarea
				value={this.state.text}
				onChange={this._onChange} />
		);
	},

	_onChange: function (event) {
		this.setState({text: event.target.value});
		this.executeAction(MarkdownAction, {text: event.target.value});
	}
});
