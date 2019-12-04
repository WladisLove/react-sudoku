import React, { useState, useCallback, useEffect } from 'react';
import { generate, change, getEmptyFieldsNumber } from '../../helpers/sudokuUtils'
import SudokuRow from '../SudokuRow'
import './styles.css'

const SudokuBoard = props => {
  const [sudoku, changeSudoku] = useState(generate);
  //const [emptyFieldsNumber, setEmptyFieldsNumber] = useState(getEmptyFieldsNumber(sudoku));
  //console.log(emptyFieldsNumber);
  const [selectedField, selectField] = useState({});

  const onSelect = (i, j) => isSystem => {
    selectField({ i, j, isSystem });
  }

  // without using 'useCallback' hook, selectedField value is always {} 
  const handleUserKeyPress = useCallback(event => {
    const { key, keyCode } = event;

    // don't handle if there is no field selected
    if (!Object.keys(selectedField).length) {
      return;
    }

    const { i, j, isSystem } = selectedField;

    // change position of selected field

    if(keyCode === 37 && j > 0){ // arrow left
      selectField({ ...selectedField, j: j - 1, isSystem: sudoku[i][j - 1] });
    } else if(keyCode === 38 && i > 0){ // arrow up
      selectField({ ...selectedField, i: i - 1, isSystem: sudoku[i - 1][j] });
    } else if(keyCode === 39 && j < 8){ // arrow right
      selectField({ ...selectedField, j: j + 1, isSystem: sudoku[i][j + 1] });
    } else if(keyCode === 40 && i < 8){ // arrow down
      selectField({ ...selectedField, i: i + 1, isSystem: sudoku[i + 1][j] });
    }

    // change field's value in sudoku

    else if(!isSystem) {
      // change value
      const parsedVal = parseInt(key, 10);
      if (!isNaN(parsedVal)) {
        const newSudoku = change({ prevSudoku: sudoku, i, j, value: parsedVal });
        //newSudoku
        changeSudoku(newSudoku);
      }
      // remove value (set null)
      if(keyCode === 46 || keyCode === 8) {
        const newSudoku = change({ prevSudoku: sudoku, i, j, value: null })
        changeSudoku(newSudoku);
      }
    }
  });

  useEffect(() => {
    window.addEventListener('keydown', handleUserKeyPress);

    return () => {
      window.removeEventListener('keydown', handleUserKeyPress);
    };
  }, [handleUserKeyPress]);

  

    return (
      <div className='board-container'>
      <div className="sudoku-board">
        {sudoku.map((elementsArr, i) => {
          return <SudokuRow key={`row_${i}`} rowElements={elementsArr} rowIndex={i} selectedField={selectedField} onSelect={onSelect} />;
        })}
      </div>
      </div>
    );
  
  
}

export default SudokuBoard;
