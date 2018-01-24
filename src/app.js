import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './styles/styles.scss';

import configureStore from './store/configureStore';

import AppRouter from './routers/app.router';

const store = configureStore();
const token = localStorage.getItem('token');

if (token) {
    store.dispatch({
        type: 'authenticate'
    });
}

const app = (
    <Provider store={store} >
        <AppRouter />
    </Provider>
);

ReactDOM.render(app, document.getElementById('app'));

