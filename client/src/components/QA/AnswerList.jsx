import React from "react";

export default function AnswerList(props) {
    
    if(props.name === "Seller" || props.name === "seller") {
        return <>
            <strong>{props.name}</strong>
        </>
    }
    return <>
        {props.name}
    </>
}