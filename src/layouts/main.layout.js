import React from 'react';

import Header from '../components/header.component';
import Navbar from '../components/navbar.component';
import Main from '../components/main.component';

const MainLayout = () => {
    return(
        <div>
            <Header />
            <Navbar /> 
            <Main />
        </div>
    )
};

export default MainLayout;