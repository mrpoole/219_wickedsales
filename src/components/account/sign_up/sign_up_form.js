import React from 'react';
import { reduxForm, Field } from 'redux-form';
import Input from '../../general/input';

const SignUpForm = props => {
    const { handleSubmit, signUp } = props;

    return (
        <form onSubmit={handleSubmit(signUp)}>

            <div className="row">
                <Field id="name" col="s12 m6" name="name" component={Input} label="Full Name" />
                <Field id="email" col="s12 m6" name="email" component={Input} label="Email" />
            </div>
            <div className="row">
                <Field id="password" col="s12 m6" name="password" component={Input} type="password" label="Password" />
                <Field id="password-confirm" col="s12 m6" name="passwordConfirm" component={Input} type="password" label="Confirm Password" />
            </div>

            <div className="row">
                <div className="col s12 right-align">
                    <button className="btn purple darken-2">Sign Up</button>
                </div>
            </div>
        </form>
    );
}

function validate({ email, name, password, passwordConfirm }) {
    const errors = {};

    if (!email) {
        errors.email = 'Please enter your email';
    }

    if (!name) {
        errors.name = 'Please enter your full name';
    }

    if (!password) {
        errors.password = 'Please enter your password';
    }

    if(password !== passwordConfirm){
        errors.passwordConfirm = 'Passwords do not match';
    }

    return errors;
}

export default reduxForm({
    form: 'sign-up-form',
    validate: validate
})(SignUpForm);