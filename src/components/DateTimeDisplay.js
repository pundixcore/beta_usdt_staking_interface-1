import React from 'react';

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <div className={isDanger ? 'countdown danger' : 'countdown'}>
      <p style={{fontSize:'1.15rem'}}>{value}{type}</p>
      {/* <span>{type}</span> */}
    </div>
  );
};

export default DateTimeDisplay;
