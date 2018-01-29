import React from 'react';

const ClientesListItem = ({ cliente }) => {
    const direccion = () => {
        return `${cliente.domicilio.calle} ${cliente.domicilio.altura} - ${cliente.domicilio.codigoPostal} - ${cliente.domicilio.localidad}`;
    }

    return (
        <div className="cliente-list-item">
            <div className="cliente-list-item__header">
                <h6 className="cliente-list-item__title">{cliente._id}</h6>
                <a className="cliente-list-item__icon"><i className="fa fa-address-card-o"></i></a>
            </div>

            <div className="cliente-list-item__content">
                <div className="cliente-list-item__group-field">
                    <div className="cliente-list-item__field">
                        <p className="cliente-list-item__label">Razon Social:</p>
                        <p className="cliente-list-item__value">{cliente.razonSocial}</p>
                    </div>
                    <div className="cliente-list-item__field">
                        <p className="cliente-list-item__label">Cuit:</p>
                        <p className="cliente-list-item__value">{cliente.cuit}</p>
                    </div>
                    <div className="cliente-list-item__field cliente-list-item__field--direccion">
                        <p className="cliente-list-item__label">Direccion:</p>
                        <p className="cliente-list-item__value">{direccion()}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientesListItem;