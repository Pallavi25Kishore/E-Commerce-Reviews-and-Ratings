import React from "react";
import AnswerForm from "./AnswerForm.jsx";
export default function AnswerModal(props) {
    const handleCloseForm = props.handleCloseForm
    return (
        <div className='formModalOverlay'>
        <div className='formModalContainer' data-testid = "form-modal-container">
            <div className='formCrossButtonContainer'>
                <button aria-label="close-form" onClick={handleCloseForm} className="close">&#10005;</button>
            </div>
            <div className='modal-content'>
                <AnswerForm closeForm = {handleCloseForm}/>
            </div>
        </div>
    </div>
    )
}