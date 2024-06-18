import React, { useState } from "react";
import axios from "axios";
import CreateAt from "./IsoConvert.jsx";
import { BASE_URL, API_KEY } from "../../env/config.js";
import IsoConvert from "./IsoConvert.jsx";


export default function AnswerList(props) {
    const [helpfulness, setHelpfulness] = useState(props.helpfulness);
    const [report, setReport] = useState(false);
    const isSeller = props.name.toLowerCase() === "seller";
    const [disable, setDisable] = useState(false)
    const handleYesClick = (e) => {
        if (disable === false) {
            setHelpfulness(helpfulness + 1)
            setDisable(!disable)
        } else {
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
    console.log(props.name)
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
        <div className="single_answer">
            <span className="Helpfuless">by {isSeller ? <strong>{props.name}</strong> : props.name}</span>
            <IsoConvert isoDate={props.isoDate} />
            <span className="Helpfuless">  |  </span>
            <span className="Helpfuless">Helpful? </span>
            <span  data-testid="yes" onClick={handleYesClick} >Yes</span>
            <span data-testid="count">{`(${helpfulness})`}</span>
            <span className="Helpfuless">  |  </span>
            <a className="Helpfuless" onClick={handleReportClick}> {report ? <>Reported</> : <>Report</>}</a>
        </div>
    </>
}