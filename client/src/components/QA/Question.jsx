import React, { useState } from 'react';
import Addanswer from './Addanswer.jsx';
import { BASE_URL, API_KEY } from "../../env/config.js";
import axios from 'axios';
export default function Question(props) {
    const { question, helpfulness, id } = props;
    const [helpful, setHelpful] = useState(helpfulness);
    const [disable, setDisable] = useState(false);
    const handleYesClick = (e) => {
        e.preventDefault();
        if (disable === false) {
            setHelpful(helpful + 1)
            setDisable(!disable)
        } else {
            setHelpful(helpful - 1);
            setDisable(!disable)
        }
        axios.put(`${BASE_URL}qa/answers/${id}/helpful`, { helpfulness: helpfulness }, {
            headers: { "Authorization": API_KEY }
        })
            .then((response) => {
                console.log('Success in updating helpfulness:', helpfulness);
            })
            .catch((err) => {
                console.log('Error in updating helpfulness count', err);
            });
    };
    return (
        <div>
            <div className='Single_question'>
                <strong className='left-qeustion'>Q: {question} </strong>
                <div className='right-help'>
                <span className='Helpfuless'>Helpful?</span>
                &nbsp;
                <span className="QA_helpful" data-testid="yes" onClick={handleYesClick} >Yes</span>
                <span data-testid="count">{`(${helpful})`}</span>
                <span className="QA_helpful ">|</span>
                <Addanswer id = {id}/>
                </div>
            </div>
            
        </div>
    )
}