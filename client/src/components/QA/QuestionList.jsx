import React, {useEffect, useState} from 'react';
import {BASE_URL, API_KEY} from "../../env/config.js";
import axios from 'axios';
import Answer from './Answer.jsx'
const QuestionList = function(props) {
    const [questionLists, setQuestionLists] = useState([{
        product_id: '',
        results: []
    }]);
    const URL = `${BASE_URL}qa/questions`;
    useEffect(() => {
        axios.get(URL, {
            headers:{"Authorization": API_KEY},
            params: {
                product_id: 40347
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
    return(
        <h3>Q {questionLists[0].question_body}</h3>
    )

}

export default QuestionList;