import React, { useEffect, useState } from 'react';
import { BASE_URL, API_KEY } from "../../env/config.js";
import axios from 'axios';
import Answer from './Answer.jsx';
import Search from './Search.jsx';
import Question from './Question.jsx'


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

  
    const filterQuestion = (searchKey && searchKey.length>= 3) ? questionLists.filter(question => question.question_body.toLowerCase().includes(searchKey.toLowerCase())) : questionLists

    console.log(filterQuestion)
  
    return (
        <div>
            <Search setsearchKey = {setsearchKey} />
            <div>
                {filterQuestion.map((questionList, id) => (

                    <div key = {id}>
                        <Question  data-testid="test-question" question={questionList.question_body} helpfulness = {questionList.question_helpfulness}/>
                        <Answer data-testid = "test-answer" id = {questionList.question_id}/>
                    </div>

                )
                )}
            </div>
        </div>
    )

}

export default QuestionList;