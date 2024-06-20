import React from 'react';
import Form from './Form.jsx';

const FormModal = ({handleCloseForm, metaData, fetchReviewsList, currentProduct}) => {

  return (
    <div className="formModalOverlay">
      <div className="formModalContainer" data-testid="form-modal-container">
        <div className="formCrossButtonContainer">
          <button aria-label="close-form" onClick={handleCloseForm} className="formClose">&#10005;</button>
        </div>
        <div className="formContainer">
          <Form metaData={metaData} handleCloseForm={handleCloseForm} fetchReviewsList={fetchReviewsList} currentProduct={currentProduct}/>
          </div>
      </div>
    </div>

  );

};

export default FormModal;