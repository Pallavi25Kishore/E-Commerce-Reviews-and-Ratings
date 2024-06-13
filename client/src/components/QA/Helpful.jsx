import React, {useState} from "react";

export default function Helpful({count}){
    const [counthelpful, setcounthelpful] = useState(count);
    function handleClick() {
        setcounthelpful(count++)
    }


    return(
        <>
        <span>Helpful?&nbsp; </span><span onClick={handleClick}>Yes({counthelpful})</span>
        </>
    )
}