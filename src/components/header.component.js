import React from 'react';
import { withRouter } from 'react-router-dom';

const Header = ({ history }) => {
    const onDashboardClicked = () => {
        history.push('/dashboard');
    };

    const onLogoutClicked = () => {
        history.push('/');
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

export default withRouter(Header);