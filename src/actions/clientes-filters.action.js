export const setTextFilter = (text = '') => ({
    type: 'edit_text_filter',
    payload: text
});

export const searchByRazonSocial = () => ({
    type: 'search_by_razon_social'
});

export const searchByCuit = () => ({
    type: 'search_by_cuit'
});

export const sortByRazonSocial = () => ({
    type: 'sort_by_razon_social'
});

export const sortByCuit = () => ({
    type: 'sort_by_cuit'
});