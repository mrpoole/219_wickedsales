import React from 'react';
import { reduxForm, Field } from 'redux-form';
import Input from '../../general/input';

const SignUpForm = props => {
    const { handleSubmit, signUp } = props;

    return (
        <form onSubmit={handleSubmit(signUp)}>
            <div className="row">
                <Field col="s12" id="name" name="name" component={Input} label="name" />
            </div>
            <div className="row">
                <Field col="s12" id="email" name="email" component={Input} label="email" />
            </div>
            <div className="row">
                <Field col="s12" id="password" name="password" component={Input} type="password" label="password" />
            </div>
            <div className="row">
                <Field col="s12" id="passwordconfirm" name="passwordconfirm" component={Input} type="password" label="password" />
            </div>

            <div className="row">
                <button className="btn btn-large green darken-2 right">Sign Up</button>
            </div>
        </form>
    );
}

function validate(values) {
    const { name, email, password, passwordconfirm } = values;
    const errors = {};

    if (!name) {
        errors.name = 'Please enter your name';
    }

    if (!email) {
        errors.email = 'Please enter your email';
    }

    if (!password) {
        errors.password = 'Please enter your password';
    }

    if (!passwordconfirm) {
        errors.passwordconfirm = 'Required';
    } else if (passwordconfirm !== password) {
        errors.passwordconfirm = 'Error: Password did not match';
    }

    return errors;
}

export default reduxForm({
    form: 'sign-up-form',
    validate: validate
})(SignUpForm);