import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory'

import './index.css';
import App from './containers/App/App';
import reducer from './reducers';

const createdHistory = createHistory();
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
const history = syncHistoryWithStore(createdHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <div>
                <Route path="/" component={App} />
                <Route path="/login" component={App} />
            </div>
        </Router>
    </Provider>, 
    document.getElementById('root')
);
