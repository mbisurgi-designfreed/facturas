import _ from 'lodash';

const clientesSelector = (clientes, { text, searchBy, sortBy }) => {
    const list = _.map(clientes, (cliente) => {
        return cliente;
    });

    return list.filter((cliente) => {
        if (searchBy === 'razonSocial') {
            const textMatch = cliente.razonSocial.toLowerCase().includes(text.toLowerCase());

            return textMatch;
        }

        if (searchBy === 'cuit') {
            const textMatch = cliente.cuit.toLowerCase().includes(text.toLowerCase());

            return textMatch;
        }
    }).sort((a, b) => {
        if(sortBy === 'razonSocial') {
            return a.razonSocial < b.razonSocial ? -1 : 1;
        }

        if(sortBy === 'cuit') {
            return a.cuit < b.cuit ? 1 : -1;
        }
    });
};

export default clientesSelector;