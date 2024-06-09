import React from 'react';

const Modal = ({photo, handleCrossClick}) => {

  return (
    <div className="modalOverlay">
      <div className="modalContainer">
        <div className="crossButtonContainer">
          <button onClick={handleCrossClick} className="crossToClose">&#10005;</button>
        </div>
        <div className="imageContainer">
          <img className="modalImage" src={photo.url}></img>
          </div>
      </div>
    </div>

  );
};

export default Modal;