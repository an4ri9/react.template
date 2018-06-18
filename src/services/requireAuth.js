import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { handleErrors } from './handleEvents';

export default function ( ComposeComponent ) {
    class Authinticate extends Component {
        componentWillMount() {
            if (!this.props.isAuthenticated) {
                handleErrors({ message: 'Access denied' });
                this.context.router.history.push('/signin');
            }
        }

        componentWillUpdate(nextProps) {
            if (!nextProps.isAuthenticated) {
                handleErrors({ message: 'Access denied' });
                this.context.router.history.push('/signin');
            }
        }

        render() {
            return (
                <ComposeComponent { ...this.props} />
            );
        }
    }

    Authinticate.propTypes = {
        isAuthenticated: PropTypes.bool.isRequired
    }

    Authinticate.contextTypes = {
        router: PropTypes.object.isRequired,
    }

    function mapStateToProps(state) {
        return {
            isAuthenticated: state.auth.isAuthenticated
        }
    }

    return connect(mapStateToProps)(Authinticate);
}