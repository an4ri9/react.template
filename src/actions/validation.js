import Validator from 'validator';
import _ from 'lodash';

export function validateUser(data) {
    console.log('%c data', 'color: orange', data);
    let errors = {};

    if (Validator.isEmpty(data.username)) {
        errors.username = 'This fileld is required';
    }
    if (Validator.isEmpty(data.email)) {
        errors.email = 'This fileld is required';
    }
    if (Validator.isEmpty(data.password)) {
        errors.password = 'This fileld is required';
    }
    if (Validator.isEmpty(data.passwordConfirmation)) {
        errors.passwordConfirmation = 'This fileld is required';
    }
    if (!Validator.equals(data.passwordConfirmation, data.password)) {
        errors.passwordConfirmation = 'Password does not match';
    }

    console.log('%c errors, isValid', 'color: orange', errors, _.isEmpty(errors));

    return {
        errors,
        isValid: _.isEmpty(errors)
    }
}