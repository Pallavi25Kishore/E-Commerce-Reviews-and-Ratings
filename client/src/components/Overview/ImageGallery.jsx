import React, { useState } from 'react';
import BigImage from './BigImage.jsx';
import Thumbnails from './Thumbnails.jsx';
import ArrowButton from './ArrowButton.jsx';
import ExpandedImage from './ExpandedImage.jsx';

const ImageGallery = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [expandedView, setExpandedView] = useState(false);
  const [zoomed, setZoomed] = useState(false);

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
  };

  const handleArrowClick = (direction) => {
    if (direction === 'left' && currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    } else if (direction === 'right' && currentImageIndex < images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const toggleExpandedView = () => {
    setExpandedView(!expandedView);
  };

  const toggleZoom = () => {
    setZoomed(!zoomed);
  };

  return (
    <div className="image-gallery">
      {/* {!expandedView ? ( */}
        <>
          <BigImage
            image={images[currentImageIndex].url}
            onClick={toggleExpandedView}
            // onHoverZoom={toggleZoom}
            // zoomed={zoomed}
          />
          <Thumbnails
            images={images}
            currentImageIndex={currentImageIndex}
            onThumbnailClick={handleThumbnailClick}
          />
          {currentImageIndex > 0 && <ArrowButton direction="left" onClick={() => handleArrowClick('left')} />}
          {currentImageIndex < images.length - 1 && <ArrowButton direction="right" onClick={() => handleArrowClick('right')} />}
        </>
      {/* ) : ( */}
        {/* <ExpandedImage
          image={images[currentImageIndex].url}
          onClick={toggleZoom}
          zoomed={zoomed}
          onExit={toggleExpandedView}
        /> */}

    </div>
  );
};

export default ImageGallery;
