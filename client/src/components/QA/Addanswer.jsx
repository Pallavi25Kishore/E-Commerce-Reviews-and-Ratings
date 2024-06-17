import React, { useState } from 'react';
import AnswerModal from './AnswerModal.jsx';
export default function Addanswer() {
    const[FormOpen, setFormOpen] = useState(false);

    const handleOpenForm =() => {
        setFormOpen(!FormOpen);
    }
    const handleCloseForm =()=> {
        setFormOpen(!FormOpen);
    }
    return (
        <div className="add-Answer-button">
        <a className="QA_helpful" onClick={handleOpenForm}>Add Answer</a>
        {FormOpen ? <AnswerModal handleCloseForm = {handleCloseForm}/> : null}
        </div>
    )
}