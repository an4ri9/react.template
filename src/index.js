import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Route, Switch } from 'react-router';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory';
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';
import App from './containers/App/App';
import SignUp from './containers/SignUp/SignUp';
import SignIn from './containers/SignIn/SignIn';
import reducer from './reducers';

const history = createHistory();
const middleware = routerMiddleware(history);
const store = createStore(reducer, composeWithDevTools(applyMiddleware(middleware)));

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <Route exact path="/" component={App}/>
                <Route path="/signin" component={SignIn}/>
                <Route path="/signup" component={SignUp}/>
            </div>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);
