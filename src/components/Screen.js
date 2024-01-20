import React from 'react';

const Screen = ({ value }) => {
  return (
    <input type="text" value={value} className="screen"  readOnly />
  );
};

export default Screen;  