const clientesFiltersReducer = (state = { text: '', searchBy: 'razonSocial' }, action) => {
    switch (action.type) {
        case 'edit_text_filter':
            return { ...state, text: action.payload };
        case 'search_by_razon_social':
            return { ...state, searchBy: 'razonSocial' };
        case 'search_by_cuit':
            return { ...state, searchBy: 'cuit' };
        default:
            return state;
    }
};

export default clientesFiltersReducer;