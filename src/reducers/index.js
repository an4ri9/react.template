import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import flashMessages from './flashMessages.js';

export default combineReducers({
    flashMessages,
    routing: routerReducer,
});