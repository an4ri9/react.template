import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { signUpRequest } from '../../services/auth';
import { validateUser } from '../../services/validation';
import FormFiled from  '../../components/common/formField';
import { addFlashMessage } from '../../actions/flashMessages';
import { handleRequestErrors, handleRequestSuccess } from '../../services/handleEvents';

class Signup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            passwordConfirmation: '',
            errors: {},
            isLoading: false,
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.isValid = this.isValid.bind(this);
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    isValid() {
        const { errors, isValid } = validateUser( this.state );

        if ( !isValid ) {
            this.setState({ errors });
        }

        return isValid;
    }

    onSubmit(e) {
        e.preventDefault();
        let vm = this;
        if (this.isValid()) {
            this.setState({ 
                errors: { },
                isLoading: true,
            });
            this.props.signUpRequest(this.state)
                .then(function (response) {
                    vm.setState({ 
                        isLoading: false,
                    });
                    handleRequestSuccess('You signed up successfully');
                    vm.context.router.history.push('/');
                })
                .catch(function (error) {
                    vm.setState({ 
                        isLoading: false,
                    });
                    handleRequestErrors(error);
                });
        }

    }

    render() {
        const {signUpRequest} = this.props;
        const {errors, validated, isLoading} = this.state;

        return (
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <form onSubmit={this.onSubmit}>
                        <h1>Sign up</h1>

                        <FormFiled 
                            label="Name"
                            value={this.state.username}
                            onChange={this.onChange}
                            type="text"
                            field="username"
                            placeholder="Enter name"
                            error={errors.username}
                        />

                        <FormFiled 
                            label="Email address"
                            value={this.state.email}
                            onChange={this.onChange}
                            type="email"
                            field="email"
                            placeholder="Enter email"
                            error={errors.email}
                        />

                        <FormFiled 
                            label="Password"
                            value={this.state.password}
                            onChange={this.onChange}
                            type="password"
                            field="password"
                            placeholder="Enter password"
                            error={errors.password}
                        />

                        <FormFiled 
                            label="Password Confirmation"
                            value={this.state.passwordConfirmation}
                            onChange={this.onChange}
                            type="password"
                            field="passwordConfirmation"
                            placeholder="Enter password one more time"
                            error={errors.passwordConfirmation}
                        />

                        <button type="submit" disabled={isLoading} className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

Signup.propTypes = {
    signUpRequest: PropTypes.func.isRequired,
    addFlashMessage: PropTypes.func.isRequired,
};

Signup.contextTypes = {
    router: PropTypes.object.isRequired,
}

export default connect(null, { signUpRequest, addFlashMessage })(Signup);