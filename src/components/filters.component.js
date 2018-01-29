import React from 'react';
import Select from 'react-select';

const Filters = ({ sortValue, filterValue, textValue, options, onOrderChange, onFilterChange, onTextChange }) => {
    return (
        <form className="form">
            <div className="form__form-group">
                <label className="form__label">Ordenar</label>
                <Select className="select-custom" name="sortBy" value={sortValue} clearable={false} options={options} onChange={onOrderChange} />
                <label className="form__label">Filtrar</label>
                <Select className="select-custom" name="filterBy" value={filterValue} clearable={false} options={options} onChange={onFilterChange} />
                <input type="text" value={textValue} className="form__input" onChange={onTextChange} />
            </div>
        </form>
    )
};

export default Filters;