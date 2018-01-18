import React from 'react';

const Home = ({ history }) => {
    const onComenzarClicked = () => {
        history.push('/login');
    };

    return (
        <header className="home">
            <div className="home__title">
                <h1>Control Facturas</h1>
                <a className="btn" onClick={onComenzarClicked}>Comenzar</a>
            </div>
        </header>
    )
};

export default Home;