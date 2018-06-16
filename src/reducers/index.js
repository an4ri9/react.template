import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import flashMessages from './flashMessages.js';
import auth from './auth.js';

export default combineReducers({
    auth,
    flashMessages,
    routing: routerReducer,
});