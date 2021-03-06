import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FlashMessage extends Component {
    constructor(props) {
        super(props);

        this.onClose = this.onClose.bind(this);
    }

    onClose() {
        this.props.deleteFlashMessage(this.props.message.id);
    }

	render() {
		const { type, text } = this.props.message;
		return (
            <div className="row flash-message">
                <div className={(type === 'success') ? 'alert alert-success' : 'alert alert-danger'}>
                    {text}
                    <button onClick={this.onClose} className="close">
                        <span>
                            &times;
                        </span>
                    </button>
                </div>
            </div>
		);
	}
}

FlashMessage.propTypes = {
    message: PropTypes.object.isRequired,
    deleteFlashMessage: PropTypes.func.isRequired
}

export default FlashMessage;