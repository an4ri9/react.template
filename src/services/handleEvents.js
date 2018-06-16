import { store } from '../store';
import { addFlashMessage, deleteFlashMessage } from '../actions/flashMessages';
import _ from 'lodash';

export function handleRequestErrors (error) {
    let errMessage = '';
    if (error.response && error.response.data && error.response.data.message) {
        errMessage = error.response.data.message;
    } else {
        errMessage = error.message;
    }
    store.dispatch(addFlashMessage({
        type: 'error',
        text: errMessage
    }));

    const self = require('./handleEvents');
    self.autoCloseFlashMessage(errMessage);
}

export function handleRequestSuccess ( message ) {
    store.dispatch(addFlashMessage({
        type: 'success',
        text: message
    }));

    const self = require('./handleEvents');
    self.autoCloseFlashMessage(message);
}

export function autoCloseFlashMessage ( message ) {
    setTimeout(() => { 
        let state = store.getState();
        let id = _.findIndex(state.flashMessages, { text: message });
        (id >= 0) ? store.dispatch(deleteFlashMessage(state.flashMessages[id].id)) : null; 
    }, 5000);
}