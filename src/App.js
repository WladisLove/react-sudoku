import React from 'react';
import './App.css';

import SudokuBoard from './components/SudokuBoard'


class App extends React.Component{

  render() {
    return (
      <div className="App">
        <header className="App-header">
            Sudoku
        </header>
        <SudokuBoard />
      </div>
    );
  }
  
}

export default App;
