import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL, API_KEY } from "../../env/config.js";
import Photo from "./Photo.jsx"
import CreateAt from "../Reviews/CreatedAt.jsx"
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

    return(
        <>
            <div>
            {answerLists.map((answerList, id) => (
                <div key = {id}>
                    <ul>
                        
                        <li data-testid = "test-list">
                            A: {answerList.body}
                            <p data-testid = "test-single-answer">by {answerList.answerer_name}, <CreateAt isoDate={answerList.date} /></p>
                            <Photo data-testid = "test-photo-list" photo = {answerList.photos}/>
                        </li>
                            
                    </ul>
                </div>
            ))}
            </div>
        </>
    )
}


