import React from "react";
import Thumbnail from "../Reviews/Thumbnail.jsx";
export default function Photo(props) {

    const handleCrossClick = ()=> {

    }

    return (
        props.photo ? (
            <>
                <p >Yes, as you can see in these photo</p>
                <div className="photo_layout">
                {props.photo.map((photo ,id) => (
                    (
                        <div key = {id} className="QA_photo">
                            <Thumbnail data-testid= 'photo' photo = {photo} />
                        </div>
                    )
                ))}
                </div>
            </>
        ) : (
            <></>
        )
    )
}