import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import authReducer from '../reducers/auth.reducer';
import clientesReducer from '../reducers/clientes.reducer';
import clientesFiltersReducer from '../reducers/clientes-filters.reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            auth: authReducer,
            clientes: clientesReducer,
            clientesFilters: clientesFiltersReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );

    return store;
}