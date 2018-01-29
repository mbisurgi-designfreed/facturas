const clientesReducer = (state = {}, action) => {
    switch (action.type) {
        case 'clientes_list':
            return { list: _.mapKeys(action.payload.clientes, '_id') };
        case 'reset':
            return {};
        default:
            return state;
    }
};

export default clientesReducer;