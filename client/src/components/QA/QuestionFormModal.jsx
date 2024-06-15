import React, {useState} from 'react';
import AddQuestionForm from './AddQuestionForm.jsx';

export default function QuestionFormModal(props) {
    const handleCloseForm = props.handleCloseForm;

    
    return (
    <div className='formModalOverlay'>
        <div className='formModalContainer' data-testid = "form-modal-container">
            <div className='formCrossButtonContainer'>
                <button aria-label="close-form" onClick={handleCloseForm} className="close">&#10005;</button>
            </div>
            <div className='modal-content'>
                <AddQuestionForm closeForm = {handleCloseForm}/>
            </div>
        </div>
    </div>
    )
}