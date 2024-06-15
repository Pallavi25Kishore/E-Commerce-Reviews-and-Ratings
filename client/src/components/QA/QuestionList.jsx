import React, { useEffect, useState } from 'react';
import { BASE_URL, API_KEY } from "../../env/config.js";
import axios from 'axios';
import Answer from './Answer.jsx';
import Search from './Search.jsx';
import Question from './Question.jsx';
import AddQuestionModal from './AddQuestionModal.jsx';
const QuestionList = function (props) {
    const [questionLists, setQuestionLists] = useState([]);
    const [searchKey, setsearchKey] = useState('');
    const [showAll, setshowAll] = useState(false);
    const [openModal, setopenModal] = useState(false);
    const URL = `${BASE_URL}qa/questions`;
    useEffect(() => {
        axios.get(URL, {
            headers: { "Authorization": API_KEY },
            params: {
                product_id: 40368
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
    console.log(questionLists)

    return (
        <div>
            <Search setsearchKey = {setsearchKey} />
            <div>
                {filterQuestion.slice(0, showAll ? questionLists.length : 2).map((questionList, id) => (

                    <div key = {id}>
                        <Question  data-testid="test-question" question={questionList.question_body} helpfulness = {questionList.question_helpfulness} id = {questionList.question_id}
                        /> 
                        <Answer data-testid = "test-answer" id = {questionList.question_id}/>
                    </div>

                )
                )}
            </div>
            <div>
            {questionLists.length > 2 ? <button onClick={()=>{setshowAll(!showAll)}}> {showAll ? 'Collapse answers' : 'MORE ANSWER QUESTION' }</button> : <></>}
           <AddQuestionModal />
            </div>
        </div>
    )

}

export default QuestionList;