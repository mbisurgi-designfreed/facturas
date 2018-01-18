import React from 'react';
import { Route } from 'react-router-dom';

import Dashboard from './dashboard.component';
import ClientesList from './clientes/clientes-list.component';
import ClientesAdd from './clientes/clientes-add.component';

const Main = () => {
    return (
        <div className="main">  
            <Route path="/dashboard" exact component={Dashboard} />
            <Route path="/dashboard/clientes" exact component={ClientesList} />
            <Route path="/dashboard/clientes/add" component={ClientesAdd} />
        </div>
    );
}

export default Main;