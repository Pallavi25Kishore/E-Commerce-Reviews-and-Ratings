import React, {useState} from "react";
import axios from 'axios';
export default function AddQuestion() {
    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal);
    }

    return <div>
        <button onClick={toggleModal} className="btn-modal">ADD A QUESTION</button>
        <div id = 'QA_Modal' className="modal">
            <div className="modal-content">
                <span className="close">&time</span>
                <p>Some text in the Modal..</p>
                
            </div>
        </div>
    </div>
}