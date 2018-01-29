import React from 'react';
import { BrowserRouter, Switch, Route, Link, NavLink } from 'react-router-dom';

import Home from '../components/home.component';
import Login from '../components/login.component';
import MainLayout from '../layouts/main.layout';

import authenticateRoute from '../hoc/authenticateRoute.hoc';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/dashboard" component={authenticateRoute(MainLayout)} />
        </div>
    </BrowserRouter>
);

export default AppRouter;