import React, { useEffect, useState } from 'react';
import { BASE_URL, API_KEY } from "../../env/config.js";
import axios from 'axios';
import Answer from './Answer.jsx'
const QuestionList = function (props) {
    const [questionLists, setQuestionLists] = useState([]);
    const URL = `${BASE_URL}qa/questions`;
    useEffect(() => {
        axios.get(URL, {
            headers: { "Authorization": API_KEY },
            params: {
                product_id: 40346
            }
        })
            .then(function (response) {
                setQuestionLists(response.data.results);
            })
            .catch(function (err) {
                console.log(err);
            })
    }, []);
    console.log(questionLists)
    return (
        <div>
            
            <div>
                {questionLists.map((questionList, id) => (

                    <div key = {id}>
                        <text>Q:  </text>
                        {questionList.question_body}
                        <Answer id = {questionList.question_id}/>
                    </div>

                )
                )}
            </div>
        </div>
    )

}

export default QuestionList;