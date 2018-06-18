import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addFlashMessage } from '../../actions/flashMessages';
import { connect } from 'react-redux';
import { exampleRequest } from '../../services/example';

class Main extends Component {

	constructor(props) {
		super(props);

		this.activate = this.activate.bind(this);
	}

	activate () {
		console.log('%c localStorage.token', 'color: orange', localStorage.token);
		this.props.exampleRequest();
	}

	render() {
		this.activate();
		return (
			<div className="row">
				<div className="jumbotron">
					<h1 className="display-4">Hello! This is main page.</h1>
				</div>
			</div>
		);
	}
}

Main.propTypes = {
	addFlashMessage: PropTypes.func.isRequired,
	exampleRequest: PropTypes.func.isRequired,
};

export default connect(null, { addFlashMessage, exampleRequest })(Main);