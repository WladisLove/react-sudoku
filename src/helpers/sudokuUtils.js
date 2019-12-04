import sudokuLib from 'sudoku'

const generate = () => {
    const generated = sudokuLib.makepuzzle();  
    const sudoku = [];
  
    for (let i = 0; i < 9; i++) {
      const row = generated.slice(i*9, i*9 + 9).map(val => ({
          value: val ? val + 1 : null,
          isSystem: Boolean(val)
        }))
      sudoku.push(row)
    }
  
    console.log(sudoku)  
    return sudoku;
  }

const change = ({ prevSudoku, i, j, value }) => {
  return prevSudoku.map((row, rowI) => {
    if (rowI === i) {
      const newRow = [...row];
      newRow[j] = { ...row[j], value }
      return newRow;
    }
    return row;
  })
}

const getEmptyFieldsNumber = () => {

  return 0;
}

  export { generate, change, getEmptyFieldsNumber }