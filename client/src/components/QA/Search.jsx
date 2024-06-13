import React, {useState} from "react";

export default function Search(props) {
    const [key, setKey] = useState('');
    function handleChange(event) {
        event.preventDefault();
        props.setsearchKey(event.target.value);
    }
    
    


    return(
        <div>
                <input className="box" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS" onChange={handleChange} 
                aria-label="search-input" >
                </input>

        </div>
    )
}