import React from 'react';
import { withRouter } from 'react-router-dom';

const Navbar = ({ history }) => {
    const onClientesListarClicked = () => {
        history.push('/dashboard/clientes');
    };

    const onClientesAddClicked = () => {
        history.push('/dashboard/clientes/add');
    };

    return (
        <div className="navbar">
            <ul>
                <li>
                    <p className="navbar__nav-title"><i className="fa fa-users navbar__nav-icon"></i>Clientes</p>
                    <ul className="navbar__nav-items">
                        <li><a onClick={onClientesListarClicked}>Listar</a></li>
                        <li><a onClick={onClientesAddClicked}>Agregar</a></li>
                    </ul>
                </li>
                <li>
                    <p className="navbar__nav-title"><i className="fa fa-file-text navbar__nav-icon"></i>Facturacion</p>
                    <ul className="navbar__nav-items">
                        <li><a >Listar</a></li>
                        <li><a >Facturar</a></li>
                        <li><a >Control Cuatrimestral</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}

export default withRouter(Navbar);