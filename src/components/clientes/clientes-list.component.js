import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import Filters from '../filters.component';
import ClientesListItem from './clientes-list-item.component';

import { getClientes } from '../../actions/clientes.action';
import { setTextFilter, searchByRazonSocial, searchByCuit } from '../../actions/clientes-filters.action';

import clientesSelector from '../../selectors/clientes.selector';

class ClientesList extends Component {
    componentWillMount() {
        this.props.getClientes();
    }

    options = [{
        value: 'razonSocial',
        label: 'Razon Social'
    }, {
        value: 'cuit',
        label: 'Cuit'
    }];

    onFilterChanged = (selectedOption) => {
        this.props.setTextFilter('');

        switch (selectedOption.value) {
            case 'razonSocial':
                return this.props.searchByRazonSocial();
            case 'cuit':
                return this.props.searchByCuit();
        }
    };

    onTextChanged = (e) => {
        this.props.setTextFilter(e.target.value);
    };

    renderItems() {
        return _.map(this.props.clientes, (cliente) => {
            return <ClientesListItem cliente={cliente} key={cliente._id} />;
        });
    };

    render() {
        return (
            <div>
                <p className="main__page-title">CLIENTES / listar</p>
                <div className="container">
                    <Filters filterValue={this.props.filters.searchBy} textValue={this.props.filters.text} options={this.options} onFilterChange={this.onFilterChanged} onTextChange={this.onTextChanged} />
                    {this.renderItems()}
                </div>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return { clientes: clientesSelector(state.clientes.list, state.clientesFilters), filters: state.clientesFilters };
};

export default connect(mapStateToProps, { getClientes, setTextFilter, searchByRazonSocial, searchByCuit })(ClientesList);