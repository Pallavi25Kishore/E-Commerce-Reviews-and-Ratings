import React from 'react';

const ArrowButton = ({ direction, onClick }) => {
  return (
    <button data-testid={`arrow-button-${direction}`} className={`arrow-button ${direction}`} onClick={onClick}>
      {direction === 'left' ? '<' : '>'}
    </button>
  );
};

export default ArrowButton;
