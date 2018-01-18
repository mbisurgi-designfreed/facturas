import React from 'react';

const Login = (props) => {
    const onSubmitClicked = (e) => {
        e.preventDefault();

        props.history.push('/dashboard');
    };

    return (
        <div className="row">
            <form className="login-form" onSubmit={onSubmitClicked}>
                <div className="row">
                    <label className="login-form__login-label">Email</label>
                    <input className="login-form__login-input" type="email" />
                </div>
                <div className="row">
                    <label className="login-form__login-label">Password</label>
                    <input className="login-form__login-input" type="password" />
                </div>
                <div className="row login-form__login-button">
                    <input className="btn" type="submit" value="Login"/>
                </div>
            </form>
        </div>
    );
};

export default Login;