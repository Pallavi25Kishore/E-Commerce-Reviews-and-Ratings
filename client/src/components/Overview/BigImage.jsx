import React from 'react';

const BigImage = ({ image, onClick, zoomed }) => {
  return (
    <div
      className={`big-image ${zoomed ? 'zoomed' : ''}`}
      onClick={onClick}
      style={{ backgroundImage: `url(${image})` }}
      role="big-image"
    />
  );
};

export default BigImage;