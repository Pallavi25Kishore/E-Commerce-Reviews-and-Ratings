import React from 'react';

const BigImage = ({ image, onClick, onHoverZoom, zoomed }) => {
  return (
    <div
      className={`big-image ${zoomed ? 'zoomed' : ''}`}
      onClick={onClick}
      onMouseEnter={onHoverZoom}
      onMouseLeave={onHoverZoom}
      style={{ backgroundImage: `url(${image})` }}
      role="big-image"
    />
  );
};

export default BigImage;
