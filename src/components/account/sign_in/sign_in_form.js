import React from 'react';
import { reduxForm, Field } from 'redux-form';
import Input from '../../general/input';

const SignInForm = props => {
    const { handleSubmit, signIn } = props;

    return (
        <form onSubmit={handleSubmit(signIn)}>
            <div className="row">
                <Field col="s12" id="email" name="email" component={Input} label="email" />
            </div>
            <div className="row">
                <Field col="s12" id="password" name="password" component={Input} type="password" label="password" />
            </div>

            <div className="row">
                <button className="btn btn-large green darken-2 right">Submit</button>
            </div>
        </form>
    );
}

export default reduxForm({
    form: 'sign-in-form'
})(SignInForm);