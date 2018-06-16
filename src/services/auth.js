import { store } from '../store';
import axios from 'axios';
import { URLS } from '../constant';
import jwt from 'jsonwebtoken';
import { setCurrentUser } from '../actions/userActions';

const self = './auth';

export function signUpRequest(userData) {
    return dispatch => {
        return axios({
            method: 'post',
            url: URLS.AUTH.SIGNUP,
            data: userData,
            baseURL: URLS.API,
        });
    }
}

export function signInRequest(userData) {
    return dispatch => {
        return axios({
            method: 'post',
            url: URLS.AUTH.SIGNIN,
            data: userData,
            baseURL: URLS.API,
        }).then(res => {
            const token = res.data.token;
            localStorage.setItem('token', token);
            self.setCurrentUserFromToken();
        });
    }
}

export function setCurrentUserFromToken () {
    if (localStorage.token) {
        store.dispatch(setCurrentUser(jwt.decode(localStorage.token)));
    }
}