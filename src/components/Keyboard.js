import React from 'react';

const Keyboard = ({ keyboard, onButtonClick }) => {
  return (
    <div>
      {keyboard.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((value, colIndex) => (
            <button
              key={colIndex}
              value={value}
              onClick={() => onButtonClick(value)}
              className="button"            >
              {value} XD
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;