import React, {useState, useRef, useEffect} from 'react';
import AddQuestionForm from './AddQuestionForm.jsx';

export default function QuestionFormModal(props) {
    const handleCloseForm = props.handleCloseForm;
    const modalRef = useRef(null);
    useEffect(() => {
        function handleClickOutside(event) {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                handleCloseForm();
            }
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    },[])
    
    return (
    <div className='modal'>
        <div className='modal-content' data-testid = "form-modal-container">
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