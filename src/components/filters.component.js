import React from 'react';
import Select from 'react-select';

const Filters = ({ filterValue, textValue, options, onFilterChange, onTextChange }) => {
    return (
        <form className="form">
            <div className="form__form-group">
                <Select className="select-custom" name="filterBy" value={filterValue} clearable={false} options={options} onChange={onFilterChange} />
                <input type="text" value={textValue} className="form__input" onChange={onTextChange} />
            </div>
        </form>
    )
};

export default Filters;