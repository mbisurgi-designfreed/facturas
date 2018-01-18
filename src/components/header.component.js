import React from 'react';
import { withRouter } from 'react-router-dom';

const Header = ({ history }) => {
    const onLogoutClicked = () => {
        history.push('/');
    };

    return (
        <div className="header">
            <div className="header__btn-container">
                <button className="btn-link" onClick={onLogoutClicked}>Desloguearse <i className="fa fa-sign-out"></i></button>
            </div>
        </div>
    );
}

export default withRouter(Header);