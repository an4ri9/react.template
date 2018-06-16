import { SET_CURRENT_USER } from '../types/userTypes';
import shortid from 'shortid';
import _ from 'lodash';

const initialState = {
    isAuthentificated : false,
    user : {}
}

export default ( state=initialState, action = {} ) => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                isAuthentificated: !_.isEmpty(action.user),
                user: action.user
            }

        default: return state;

    }
}