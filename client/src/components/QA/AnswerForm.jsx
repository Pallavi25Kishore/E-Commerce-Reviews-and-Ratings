import React, { useState } from 'react'
import axios from 'axios';
import { BASE_URL, API_KEY } from "../../env/config.js";
import AddPhoto from './AddPhoto.jsx';
export default function AnswerForm({closeForm, id}) {
    const [addPhoto, setAddPhoto] = useState(false);
    const [answerForm, setAnswerForm] = useState({
        asnwer_body: '',
        nickname: '',
        email: '',
    })
    const [getPhotos, setGetPhotos] = useState([]);
    const URL = `${BASE_URL}qa/questions/${id}/answers`;
    const handleInputChange = (e)=>{
        const {name, value} = e.target;
        setAnswerForm(
            {
                ...answerForm,
                [name] : value,
            }
        )
    }
    let axiosConfig = {
        headers: {
            "Authorization": API_KEY
        }
    };
    var postData = {
        "body": answerForm.asnwer_body,
        "name": answerForm.nickname,
        "email": answerForm.email,
        "photos": getPhotos.File
    };
    function submitAnswer(event) {
        event.preventDefault();
        closeForm(false);
        axios.post(URL, postData, axiosConfig).then(function(response) {
            alert("successful submit")
        }) .catch(function(err) {
            alert(err);
        })
    }


    console.log(getPhotos)
    return (
        <div className="modalForm">

            <div>
                <h2>Submit your Answer</h2>
                <h3>Product Name : Question Body</h3>
                <form className='AnswerForm' onSubmit={submitAnswer} aria-required>
                    <label>Your Answer</label>
                    <textarea required maxLength="1000" placeholder='Example: jackson11!' name="asnwer_body"  style={{ width: '100%', minHeight: '100px' }} onChange={handleInputChange} ></textarea >
                    <label>Your Nickname</label>
                    <input required type="text" placeholder='nickname' name="nickname"  maxLength="60" onChange={handleInputChange} ></input>
                    <p>For privacy reasons, do not use your full name or email address</p>
                    <label>Your email</label>
                    <input required type='email' placeholder='Why did you like the product or not?' onChange={handleInputChange} name='email' ></input>
                    <p>For authentication reasons, you will not be emailed</p>
                    {addPhoto ? null : <button onClick={()=> {setAddPhoto(!addPhoto)}}>Add Photo</button>}
                    {addPhoto ? <AddPhoto setAddPhoto = {setAddPhoto} setGetPhotos = {setGetPhotos}/> : null}
                    <button type='submit'>Submit Question</button>
                </form>
            </div>

        </div>
    )

}