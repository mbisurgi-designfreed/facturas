import React from 'react';
import { withRouter } from 'react-router-dom';

const Header = ({ history }) => {
    const onLogoutClicked = () => {
        history.push('/');
    };

    return (
        <div className="header">
            <button className="header__btn btn-link" onClick={onLogoutClicked}>Desloguearse</button>
        </div>
    );
}

export default withRouter(Header);