import axios from 'axios';

export function signUpRequest(userData) {
    return dispatch => {
        return axios.post('/api/signup', userData);
    }
}

export function signInRequest(userData) {
    return dispatch => {
        return axios.post('/api/signin', userData);
    }
}