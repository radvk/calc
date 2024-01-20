import React, { useState } from 'react';
import Keyboard from './components/Keyboard';
import Screen from './components/Screen';
import './App.css';

const keyboard = [
  ["C", "+ -", "%", "/"],
  [7, 8, 9, "X"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

const App = () => {
  const [screenValue, setScreenValue] = useState('');


  const handleButtonClick = (value) => {
    setScreenValue((prevValue) => value === "C" ? " " : prevValue + value);
    console.log(value)
  };

  return (
    <div className="App">
      <div className="wrapper">
        <Screen value={screenValue} />
        <Keyboard keyboard={keyboard} onButtonClick={handleButtonClick} />
      </div>
    </div>
  );
}

export default App;