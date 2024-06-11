import React, { useEffect, useState } from 'react';
import { BASE_URL, API_KEY } from "../../env/config.js";
import axios from 'axios';
import Answer from './Answer.jsx';
import Search from './Search.jsx'


const QuestionList = function (props) {
    const [questionLists, setQuestionLists] = useState([]);
    const [searchKey, setsearchKey] = useState('');
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
   
  
    const filterQuestion = searchKey ? questionLists.filter(question => question.question_body.toLowerCase().includes(searchKey.toLowerCase())) : questionLists


  
    return (
        <div>
            <Search setsearchKey = {setsearchKey} />
            <div>
                {filterQuestion.map((questionList, id) => (

                    <div key = {id}>
                        <p>Q:  {questionList.question_body}</p>
                        <Answer id = {questionList.question_id}/>
                    </div>

                )
                )}
            </div>
        </div>
    )

}

export default QuestionList;