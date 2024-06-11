import React, {useState} from "react";


export default function Search(props) {
    const [key, setKey] = useState('');
    function handleChange(event) {

        setKey(event.target.value);

    }
    
    function handleSubmit() {
        event.preventDefault();
        props.setsearchKey(key);
        setKey('');
    }


    return(
        <div>
            <form onSubmit = {handleSubmit} id = 'myForm'>
                <input placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS" onChange={handleChange} value  = {key}></input>
                <button type = "submit">Search</button>
            </form>
        </div>
    )
}