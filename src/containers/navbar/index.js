import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../services/auth';

class Navbar extends Component {
    logout(e) {
        e.preventDefault();
        this.props.logout();
    }

    render () {
        const { isAuthentificated } = this.props.auth;
        const userLinks = (
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/about" className="nav-link">About</Link>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link" onClick={this.logout.bind(this)}>Logout</a>
                </li>
            </ul>
        );
        const guestLinks = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/signin" className="nav-link">Sign in</Link>
                </li>
                <li className="nav-item">
                    <Link to="/signup" className="nav-link">Sign up</Link>
                </li>
            </ul>
        );

        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">React-template</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    { isAuthentificated ? userLinks : guestLinks}
                </div>
            </nav>
        );
    }
}

Navbar.propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired,
};

function mapStateToProps (state) {
    return {
        auth: state.auth
    }
}

export default connect (mapStateToProps, { logout } )(Navbar);