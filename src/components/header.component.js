import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { signout } from '../actions/auth.action';

const Header = ({ history, signout }) => {
    const onDashboardClicked = () => {
        history.push('/dashboard');
    };

    const onLogoutClicked = () => {
        signout();
    };

    return (
        <div className="header">
            <button className="btn-link" onClick={onDashboardClicked}><i className="fa fa-tachometer fa-2x"></i></button>

            <div className="header__btn-container">
                <button className="btn-link" onClick={onLogoutClicked}>Desloguearse <i className="fa fa-sign-out"></i></button>
            </div>
        </div>
    );
}

export default connect(null, { signout })(withRouter(Header));