import React from 'react'
import Helpful from './Helpful.jsx'
export default function Question(props) {
    console.log(props.helpfulness)
    return(
        <div>
        <h4>Q: {props.question} </h4>
        <p><Helpful count= {props.helpfulness} /></p>
       </div>
    )
}