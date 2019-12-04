import React from 'react';
import PropTypes from 'prop-types';
import './styles.css'

const SudokuField = ({ value, isSystem, onSelect, isSelected }) => {
    const clNames = `sudoku-field ${isSelected ? 'selected-field' : ''} ${isSystem ? 'system-value' : ''}`;
    const selectHandler = () => onSelect(isSystem);
    return (
      <div className={clNames} onClick={selectHandler}>
        {value}
      </div>
    );
}

SudokuField.propTypes = {
    value: PropTypes.oneOfType([ PropTypes.number, null]).isRequired,
    isSystem: PropTypes.bool,
    isSelected: PropTypes.bool,
    onSelect: PropTypes.func,
}

SudokuField.defaultProps = {
    isSystem: false,
    isSelected: false,
    onSelect: () => {},
}

export default SudokuField;
