import axios from 'axios';
import { URLS } from '../constant';

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
        });
    }
}