import React, {useState} from 'react';
import FormModal from './FormModal.jsx';

const AddReview = ({metaData}) => {

  const [FormOpen, setFormOpen] = useState(false);

  const handleAddReviewClick = (event) => {
    event.preventDefault();
    setFormOpen(true);
  };

  const handleCloseForm = () => {
    event.preventDefault();
    setFormOpen(false); //To do:  add - resetting of values once form is closed
  }

  return (
    <div className="add-review-button">
    <button onClick={handleAddReviewClick}>Add a Review  &#43;</button>
    {FormOpen ? <FormModal handleCloseForm={handleCloseForm} metaData={metaData}/> : null}
    </div>
  )

};

export default AddReview;