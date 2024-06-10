import React from 'react';

const Modal = ({photo, handleCrossClick}) => {

  return (
    <div className="modalOverlay">
      <div className="modalContainer" data-testid="modal-container">
        <div className="crossButtonContainer">
          <button aria-label="x" onClick={handleCrossClick} className="crossToClose">&#10005;</button>
        </div>
        <div className="imageContainer">
          <img className="modalImage" src={photo.url} alt="review photo in modular window"></img>
          </div>
      </div>
    </div>

  );
};

export default Modal;