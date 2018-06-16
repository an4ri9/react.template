import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from '../home';
import About from '../about';
import Signup from '../signup';
import Signin from '../signin';
import Navbar from '../../components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import FlashMassagesList from '../../containers/flashMessages/flashMessagesList';
import * as jquery from 'jquery/dist/jquery.js';
import * as popper from 'popper.js/dist/popper.js';
import * as bootstrap from 'bootstrap/dist/js/bootstrap.js';

const App = () => (
	<div>
		<Navbar />
		<div className="container">
			<FlashMassagesList />
			<Route exact path="/" component={Home} />
			<Route exact path="/about" component={About} />
			<Route exact path="/signup" component={Signup} />
			<Route exact path="/signin" component={Signin} />
		</div>
	</div>
)

export default App;