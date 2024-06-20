import React from "react";
import AnswerForm from "./AnswerForm.jsx";
export default function AnswerModal({handleCloseForm, id}) {
    return (
        <div className='modal'>
        <div className='modal-content' data-testid = "form-modal-container">
            <div className='formCrossButtonContainer'>
                <button aria-label="close-form" onClick={handleCloseForm} className="close">&#10005;</button>
            </div>
            <div className='modal-content'>
                <AnswerForm closeForm = {handleCloseForm}  id = {id}/>
            </div>
        </div>
    </div>
    )
}