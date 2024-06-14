import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL, API_KEY } from "../../env/config.js";
import Photo from "./Photo.jsx"
import AnswerBody from './AnswerBody.jsx';
import AnswerList from './AnswerList.jsx';

export default function Answer(props) {
    const question_id = props.id;
    const URL = `${BASE_URL}qa/questions/${question_id}/answers`;
    const [answerLists, setanswerLists] = useState([]);
    const [showMore, setShowMore] = useState(false);
    useEffect(() => {
        axios.get(URL,
            {
                headers: { "Authorization": API_KEY }
            }
        ).then(function (respoonse) {
            setanswerLists(respoonse.data.results.sort((a, b) => b.helpfulness - a.helpfulness));
        }).catch(function (err) {
            console.log(err);
        })
    }, [question_id]);
    const handleClick = (e) => {
        e.preventDefault();
        setShowMore(!showMore)
    }
    return (
        <>
            <div>
                {answerLists.slice(0, showMore ? answerLists.length : 2).map((answerList, id) => (

                    <div key={id}
                    style={{
                        maxHeight: showMore ? '50vh' : 'auto',
                        overflowY: showMore ? 'scroll' : 'hidden',
                        border: showMore ? '1px solid #ccc' : 'none'
                    }}
                    >

                        <ul>
                            <li data-testid="test-list">
                                <AnswerBody body={answerList.body} />
                                <span data-testid="test-single-answer">by&nbsp;<AnswerList name={answerList.answerer_name} answer_id={answerList.answer_id} helpfulness={answerList.helpfulness} isoDate={answerList.date}
                                />
                                    &nbsp; </span>
                                <Photo data-testid="test-photo-list" photo={answerList.photos} />
                            </li>
                        </ul>
                    </div>
                ))}
                {answerLists.length > 2 && (<strong className="QA_helpful" onClick={handleClick}>{showMore ? 'Collapse answers' : 'LOAD MORE ANSWERS '}</strong>)}

            </div>
            
        </>
    )
}


