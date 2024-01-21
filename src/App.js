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
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    if ( value === "+" ){
      setResult(input)
    }
    
    setInput((prevValue) => value === "C" ? " " : prevValue + value);
    console.log(result)
  };

  return (
    <div className="App">
      <div className="wrapper">
        <Screen value={input} />
        <Keyboard keyboard={keyboard} onButtonClick={handleButtonClick} />
      </div>
    </div>
  );
}

export default App;