import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addFlashMessage } from '../../actions/flashMessages';
import { connect } from 'react-redux';

class Main extends Component {

	constructor(props) {
		super(props);

		this.activate = this.activate.bind(this);
	}

	activate () {
		
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
};

export default connect(null, { addFlashMessage })(Main);