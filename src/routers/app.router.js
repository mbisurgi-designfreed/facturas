import React from 'react';
import { BrowserRouter, Switch, Route, Link, NavLink } from 'react-router-dom';

import Home from '../components/home.component';
import Login from '../components/login.component';
import Dashboard from '../components/dashboard.component';

const AppRouter = () => (
    <BrowserRouter>
        <div className="container">
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
        </div>
    </BrowserRouter>
);

export default AppRouter;