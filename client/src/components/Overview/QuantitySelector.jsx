import React from 'react';

const QuantitySelector = ({ maxQuantity, onSelectQuantity }) => {
  const handleChange = (event) => {
    onSelectQuantity(event.target.value);
  };

  return (
    <div className="quantity-selector">
      <h3>Select Quantity</h3>
      <select onChange={handleChange} defaultValue="" disabled={maxQuantity === 0}>
        <option value="">{maxQuantity === 0 ? '-' : 'Select Quantity'}</option>
        {Array.from({ length: Math.min(maxQuantity, 15) }, (_, i) => i + 1).map((quantity) => (
          <option key={quantity} value={quantity}>{quantity}</option>
        ))}
      </select>
    </div>
  );
};

export default QuantitySelector;
