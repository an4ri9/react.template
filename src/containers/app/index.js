import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from '../home';
import About from '../about';
import Signup from '../signup';
import Navbar from '../../components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <div>
    <Navbar />

    <div className="container">
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/signup" component={Signup} />
    </div>
  </div>
)

export default App;