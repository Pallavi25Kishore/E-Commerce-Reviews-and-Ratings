import React, { useState } from "react";
import axios from "axios";
import CreateAt from "../Reviews/CreatedAt.jsx";
import { BASE_URL, API_KEY } from "../../env/config.js";


export default function AnswerList(props) {
    const [helpfulness, setHelpfulness] = useState(props.helpfulness);
    const [report, setReport] = useState(false);
    const isSeller = props.name.toLowerCase() === "seller";
    const [disable, setDisable] = useState(false)
    const handleYesClick = (e) => {
        if(disable === false) {
        setHelpfulness(helpfulness + 1)
        setDisable(!disable)
        }else {
            setHelpfulness(helpfulness - 1);
            setDisable(!disable)
        }
        axios.put(`${BASE_URL}qa/answers/${props.answer_id}/helpful`, { helpfulness: helpfulness }, {
            headers: { "Authorization": API_KEY }
        })
            .then((response) => {
                console.log('Success in updating helpfulness:', helpfulness);
            })
            .catch((err) => {
                console.log('Error in updating helpfulness count', err);
            });
    };

     const handleReportClick = () => {
        setReport(!report);

        // axios.put(`${BASE_URL}qa/answers/${props.answer_id}/report`, {}, { headers: { "Authorization": API_KEY } })
        //     .then((response) => {
        //         console.log('Report success');
        //     })
        //     .catch((err) => {
        //         console.log('Error in reporting an answer', err);
        //     });
    };


    return <>
        <span>{isSeller ? <strong>{props.name}</strong> : props.name}</span>
        &nbsp;&nbsp;
        <CreateAt isoDate={props.isoDate} />
        <span>  |  </span>
        <span>Helpful? </span>
        &nbsp;
        <span className= "QA_helpful" data-testid="yes" onClick={handleYesClick} >Yes</span>
        
        <span data-testid="count">{`(${helpfulness})`}</span>
        <span>  |  </span>
        <a className= "QA_helpful" onClick={handleReportClick}> {report ? <>Reported</> : <>Report</> }</a>
    </>
}