import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">React-template</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link to="/" className="nav-link">Main</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/signup" className="nav-link">Sign up</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/signin" className="nav-link">Sign in</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}