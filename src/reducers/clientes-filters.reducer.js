const clientesFiltersReducer = (state = { text: '', searchBy: 'razonSocial', sortBy: 'razonSocial' }, action) => {
    switch (action.type) {
        case 'edit_text_filter':
            return { ...state, text: action.payload };
        case 'search_by_razon_social':
            return { ...state, searchBy: 'razonSocial' };
        case 'search_by_cuit':
            return { ...state, searchBy: 'cuit' };
        case 'sort_by_razon_social':
            return { ...state, sortBy: 'razonSocial' };
        case 'sort_by_cuit':
            return { ...state, sortBy: 'cuit' };
        case 'reset':
            return { text: '', searchBy: 'razonSocial', sortBy: 'razonSocial' };
        default:
            return state;
    }
};

export default clientesFiltersReducer;