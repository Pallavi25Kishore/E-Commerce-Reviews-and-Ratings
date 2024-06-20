import React, { useState } from 'react';
import ArrowButton from './ArrowButton.jsx';

const ExpandedImage = ({ images, currentImageIndex, onArrowClick, onThumbnailClick, onClick, zoomed, onExit }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (zoomed) {
      const { offsetX, offsetY, target } = e.nativeEvent;
      const { clientWidth, clientHeight } = target;

      setPosition({
        x: (offsetX / clientWidth) * 100,
        y: (offsetY / clientHeight) * 100,
      });
    }
  };

  const renderThumbnails = () => {
    return (
      <div className="expanded-thumbnails">
        {images.map((img, index) => (
          <div
            key={index}
            className={`expanded-thumbnail ${index === currentImageIndex ? 'selected' : ''}`}
            onClick={() => onThumbnailClick(index)}
            style={{ backgroundImage: `url(${img.thumbnail_url})` }}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="expanded-image-container" data-testid="expanded-image-container" onMouseMove={handleMouseMove}>
      <button className="exit-button" onClick={onExit}>X</button>
      {!zoomed && (
        <>
          {currentImageIndex > 0 && <ArrowButton direction="left" onClick={() => onArrowClick('left')} />}
          {currentImageIndex < images.length - 1 && <ArrowButton direction="right" onClick={() => onArrowClick('right')} />}
        </>
      )}
      <div
        className={`expanded-image ${zoomed ? 'zoomed' : ''}`}
        data-testid="expanded-image"
        onClick={onClick}
        style={{
          backgroundImage: `url(${images[currentImageIndex].url})`,
          backgroundPosition: `${position.x}% ${position.y}%`
        }}
      />
      {!zoomed && renderThumbnails()}
    </div>
  );
};

export default ExpandedImage;
