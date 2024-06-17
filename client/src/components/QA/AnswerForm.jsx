import React, { useState } from 'react'
import axios from 'axios';
import { BASE_URL, API_KEY } from "../../env/config.js";
import AddPhoto from './AddPhoto.jsx';
export default function AnswerForm(props) {
    const closeForm = props.closeForm;
    const [addPhoto, setAddPhoto] = useState(false);
    const [answerForm, setAnswerForm] = useState({
        asnwer_body: '',
        nickname: '',
        email: '',
        photo: ''
    })
    const URL = `${BASE_URL}qa/questions`;
    const handleInputChange = (e)=>{
        e.preventDefault();
        const {name, value} = e.target;
        setQuestionForm(
            {
                ...questionForm,
                [name] : value,
            }
        )
    }
    function submitAnswer(event) {
        event.preventDefault();
        closeForm(false);
    }
    return (
        <div className="modalForm">

            <div>
                <h2>Submit your Answer</h2>
                <h3>Product Name : Question Body</h3>
                <form className='AnswerForm' onSubmit={submitAnswer} aria-required>
                    <label>Your Answer</label>
                    <textarea required maxLength="1000" placeholder='Example: jackson11!' name="asnwer_body" value={answerForm.asnwer_body} style={{ width: '100%', minHeight: '100px' }} onChange={handleInputChange} ></textarea >
                    <label>Your Nickname</label>
                    <input required type="text" placeholder={answerForm.nickname} name="nickname" maxLength="60" onChange={handleInputChange} ></input>
                    <p>For privacy reasons, do not use your full name or email address</p>
                    <label>Your email</label>
                    <input required type='email' placeholder='Why did you like the product or not?' onChange={handleInputChange} name='email' ></input>
                    <p>For authentication reasons, you will not be emailed</p>
                    <button onClick={()=> {setAddPhoto(!addPhoto)}}>Add Photo</button>
                    {addPhoto ? <AddPhoto/> : null}
                    <button type='submit'>Submit Question</button>
                </form>
            </div>

        </div>
    )

}