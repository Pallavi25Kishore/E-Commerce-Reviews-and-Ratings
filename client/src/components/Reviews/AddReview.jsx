import React, {useState} from 'react';
import FormModal from './FormModal.jsx';

const AddReview = () => {

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
    <div>
    <button onClick={handleAddReviewClick}>Add a Review  &#43;</button>
    {FormOpen ? <FormModal handleCloseForm={handleCloseForm}/> : null}
    </div>
  )

};

export default AddReview;