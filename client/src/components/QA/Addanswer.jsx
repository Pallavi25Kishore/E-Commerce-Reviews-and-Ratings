import React, { useState } from 'react';
import AnswerMoodal from './AnswerModal.jsx';
export default function Addanswer() {
    const[FormOpen, setFormOpen] = useState(false);

    const handleOpenForm =() => {
        setFormOpen(!FormOpen);
    }
    const handleCloseForm =()=> {
        setFormOpen(!FormOpen);
    }
    return (
        <div className="add-Answer-button Helpfuless">
        <a className="QA_helpful" onClick={handleOpenForm}>Add Answer</a>
        {FormOpen ? <AnswerMoodal handleCloseForm = {handleCloseForm}/> : null}
        </div>
    )
}