import React from 'react';
import PropTypes from 'prop-types';
import SudokuField from '../SudokuField'

import './styles.css'

const SudokuRow = ({ rowElements, rowIndex, selectedField, onSelect }) => {
    

    const prepareRow = (rowArr, currentI) => {
        let row = [];
        if(selectedField.i === currentI) {
          row = rowArr.map((el, j) => {
            return <SudokuField key={`${currentI}_${j}`} {...el} onSelect={onSelect(currentI, j)} isSelected={j === selectedField.j} />
          })
        } else {
          row = rowArr.map((el, j) => {
            return <SudokuField key={`${currentI}_${j}`} {...el} onSelect={onSelect(currentI, j)} />
          })
        }
        return row;
      }
    
    const row = prepareRow(rowElements, rowIndex)

    return <div className="sudoku-row">{row}</div>;
}

SudokuRow.propTypes = {}

SudokuRow.defaultProps = {}

export default SudokuRow;
