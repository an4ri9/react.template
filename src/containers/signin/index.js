import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { signInRequest } from '../../services/auth';
import { validateLogin } from '../../services/validation';
import FormFiled from  '../../components/common/formField';
import { addFlashMessage } from '../../actions/flashMessages';
import { handleErrors, handleSuccess } from '../../services/handleEvents';

class Signin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errors: {},
            isLoading: false,
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    isValid() {
        const { email, password } = this.state;
        const { errors, isValid } = validateLogin( {email, password} );

        if ( !isValid ) {
            this.setState({ errors });
        }

        return isValid;
    }

    onSubmit(e) {
        e.preventDefault();
        const { email, password } = this.state;
        const vm = this;
        if (this.isValid()) {
            this.setState({ 
                errors: { },
                isLoading: true,
            });
            this.props.signInRequest({ email, password})
                .then(function (response) {
                    vm.setState({ 
                        isLoading: false,
                    });
                    handleSuccess('You signed in successfully');
                    vm.context.router.history.push('/');
                })
                .catch(function (error) {
                    console.log('err', error);
                    vm.setState({ 
                        isLoading: false,
                    });
                    handleErrors(error);
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

                        <h1>Sign in</h1>

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

                        <button type="submit" disabled={isLoading} className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

Signin.propTypes = {
    signInRequest: PropTypes.func.isRequired,
    addFlashMessage: PropTypes.func.isRequired,
};

Signin.contextTypes = {
    router: PropTypes.object.isRequired,
}

export default connect(null, { signInRequest, addFlashMessage })(Signin);