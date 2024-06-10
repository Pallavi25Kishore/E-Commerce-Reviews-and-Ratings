import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL, API_KEY } from "../../env/config.js";


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
    console.log(answerLists);


    return(
        <>
            <div>
            {answerLists.map((answerList) => (
                <div>
                    <ul>
                        
                        <li>
                            A: {answerList.body}
                            <p>by {answerList.answerer_name}, {answerList.date} </p>
                        </li>
                            {answerList.photos ? answerList.photos : ''}
                    </ul>
                </div>
            ))}
            </div>
        </>
    )
}


