import React, {useEffect, useState} from 'react';
import {BASE_URL, API_KEY} from "../../env/config.js";
import axios from 'axios';
import Answer from './Answer.jsx'
const QuestionList = function(props) {
    const [questionLists, setQuestionLists] = useState([]);
    const URL = `${BASE_URL}qa/questions`;
    useEffect(() => {
        axios.get(URL, {
            headers:{"Authorization": API_KEY},
            params: {
                product_id: 40346
            }
        })
        .then(function(response){
            setQuestionLists(response.data.results);
        })
        .catch(function(err) {
            console.log(err);
        })
    },[]);  
    console.log(questionLists)
    
    // const question = questionLists.map(questionList => <li>{questionList}</li>)
    return(
        <div>
        <text>Q </text>
        <div>
        {questionLists.map((questionList) => (
             <div>
            {questionList.question_body} 
            </div>
        )
        )}
        {/* <text>{question}</text> */}
        </div>
        </div>
    )

}

export default QuestionList;