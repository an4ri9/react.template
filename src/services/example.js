import axios from 'axios';
import { URLS } from '../constant';
import jwt from 'jsonwebtoken';

export function exampleRequest() {
    return dispatch => {
        return axios({
            method: 'get',
            url: '/example',
            baseURL: URLS.API,
        }).then(response => {
            console.log('%c response', 'color: orange', response);
        })
    }
}