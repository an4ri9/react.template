import React, { Component } from 'react';

export default () => {
    return (
        <nav classname="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a href="#" className="navbar-brand">React-template</a>
                </div>

                <div className="collapse navbar-collapse">
                    <ul className="nav navbar-nav navbar-right">
                        <li>
                            <a href="#">Sign up</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}