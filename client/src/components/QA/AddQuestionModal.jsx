import React, {useState} from "react";
import FormModal from './QuestionFormModal.jsx';
export default function AddQuestion({id}) {
    const [FormOpen, setFormOpen] = useState(false);

    const handleAddQuestionClick = ()=> {
        setFormOpen(!FormOpen);
    }

    const handleCloseForm = () => {
        setFormOpen(false);
    }

    return (<div className="add-Question-button">
        <button className= 'button2' onClick={handleAddQuestionClick}>ADD A QUESTION +</button>
        {FormOpen ? <FormModal handleCloseForm = {handleCloseForm} id = {id}/> : null}
    </div>
    )
}