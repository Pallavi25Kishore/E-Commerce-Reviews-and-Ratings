import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL, API_KEY } from "../../env/config.js";
import Photo from "./Photo.jsx"
import CreateAt from "../Reviews/CreatedAt.jsx"
import AnswerBody from './AnswerBody.jsx';
import AnswerList from './AnswerList.jsx';
import Helpful from './Helpful.jsx';


export default function Answer(props) {
    const question_id = props.id;
    const URL = `${BASE_URL}qa/questions/${question_id}/answers`;
    const [answerLists, setanswerLists] = useState([]);
    useEffect(() => {
        axios.get(URL,
            {
                headers: { "Authorization": API_KEY }
            }
        ).then(function(respoonse) {
            setanswerLists(respoonse.data.results)
        }).catch(function(err) {
            console.log(err);
        })
    }, []);
    console.log(answerLists)
    return(
        <>
            <div>
            {answerLists.map((answerList, id) => (
                <div key = {id}>
                    <ul>
                        
                        <li data-testid = "test-list">
                            <AnswerBody body = {answerList.body}/>
                            <p data-testid = "test-single-answer">by&nbsp;<AnswerList name = {answerList.answerer_name}/>,&nbsp;<CreateAt isoDate={answerList.date} /> 
                            &nbsp;<Helpful count = {answerList.helpfulness} />
                            </p>
                            <Photo data-testid = "test-photo-list" photo = {answerList.photos}/>
                        </li>
                            
                    </ul>
                </div>
            ))}
            </div>
        </>
    )
}


