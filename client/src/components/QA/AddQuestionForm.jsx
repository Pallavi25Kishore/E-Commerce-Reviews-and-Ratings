import React, { useState } from 'react'
import axios from 'axios';
import { BASE_URL, API_KEY } from "../../env/config.js";

export default function AddQuestionForm(props) {
    const closeForm = props.closeForm;
    const [questionForm, setQuestionForm] = useState({
        question: '',
        nickname: '',
        email: ''
    })
    const[errors, setErrors] = useState([]);
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



    const SubmitQuestion = (event)=> {
        event.preventDefault();
        closeForm(false); // Close the modal on successful submission
        axios.post(URL, {
            headers: { "Authorization": API_KEY },
            data: {
                question_body: questionForm.question,
                asker_name: questionForm.nickname,
                email: questionForm.email,
                product_id: 40368
            }
        }).then(function(response) {
            alert("successful submit")
        }) .then(function(err) {
            alert(err);
        })

    }
    return (
        <div className="modalForm">

            <div>
                <h2>Ask Your Question</h2>
                <h3>Product Name(passing in variable from Overview)</h3>
                <form className='QuesionForm' onSubmit={SubmitQuestion} aria-required>
                    <label>Your Question</label>
                    <textarea required maxLength="1000" placeholder= 'Example: jackson11!' name = "question" value={questionForm.question} style={{ width: '100%', minHeight: '100px' }} onChange={handleInputChange} ></textarea >
                    <label>Your Nickname</label>
                    <input required type="text" placeholder={questionForm.nickname} name="nickname" maxLength="60" onChange={handleInputChange} ></input>
                    <p>For privacy reasons, do not use your full name or email address</p>
                    <label>Your email</label>
                    <input required type='email' placeholder='Why did you like the product or not?' onChange={handleInputChange} name='email' ></input>
                    <p>For authentication reasons, you will not be emailed</p>
                    <button type='submit'>Submit Question</button>
                </form>
            </div>

        </div>
    )
}