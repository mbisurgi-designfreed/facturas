import React, { Component } from 'react';
import { connect } from 'react-redux';

import { signin } from '../actions/auth.action';

class Login extends Component {
    state = {
        email: '',
        password: ''
    };

    onEmailChanged = (e) => {
        const email = e.target.value;

        this.setState(() => ({ email }));
    };

    onPasswordChanged = (e) => {
        const password = e.target.value;

        this.setState(() => ({ password }));
    };

    onSubmitClicked = (e) => {
        e.preventDefault();

        this.props.signin({ email: this.state.email, password: this.state.password }, this.props.history);
    };

    render() {
        return (
            <div className="row">
                <form className="login-form" onSubmit={this.onSubmitClicked}>
                    <div className="row">
                        <label className="login-form__login-label">Email</label>
                        <input className="login-form__login-input" type="email" value={this.state.email} onChange={this.onEmailChanged} />
                    </div>
                    <div className="row">
                        <label className="login-form__login-label">Password</label>
                        <input className="login-form__login-input" type="password" value={this.state.password} onChange={this.onPasswordChanged} />
                    </div>
                    <div className="row">
                        <p className="text-error">{this.props.error}</p>
                    </div>
                    <div className="row login-form__login-button">
                        <input className="btn" type="submit" value="Login" />
                    </div>
                </form>
            </div>
        );
    }
};

const mapStateToProps = (state) => ({
    error: state.auth.error
});

export default connect(mapStateToProps, { signin })(Login);