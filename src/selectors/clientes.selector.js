import _ from 'lodash';

const clientesSelector = (clientes, { text, searchBy }) => {
    const list = _.map(clientes, (cliente) => {
        return cliente;
    });

    if (searchBy === 'razonSocial') {
        return list.filter((cliente) => {
            const textMatch = cliente.razonSocial.toLowerCase().includes(text.toLowerCase());

            return textMatch;
        });
    }

    if (searchBy === 'cuit') {
        return list.filter((cliente) => {
            const textMatch = cliente.cuit.toLowerCase().includes(text.toLowerCase());

            return textMatch;
        });
    }

    return list;
};

export default clientesSelector;