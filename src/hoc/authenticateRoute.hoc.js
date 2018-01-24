import React, { Component } from 'react';
import { connect } from 'react-redux';

export default (Route) => {
    class AuthenticateRoute extends Component {
        componentWillMount() {
            if (!this.props.auth) {
                this.props.history.push('/login');
            }
        }

        componentWillUpdate(nextProps) {
            if (!nextProps.auth) {
                this.props.history.push('/login');
            }
        }

        render() {
            return (
                <Route {...this.props} />
            );
        }
    }

    const mapStateToProps = (state) => {
        return { auth: state.auth.authenticate };
    }

    return connect(mapStateToProps)(AuthenticateRoute);
};
