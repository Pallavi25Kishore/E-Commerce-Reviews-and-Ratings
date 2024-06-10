import React from "react";

export default function Phooto(props) {
    return (
        props.photo ? (
            <>
                <p>Yes, as you can see in these photo</p>

                {props.photo.map((photo ,id) => (
                    (
                        <div key = {id}>
                            <img src={photo.url}></img>
                        </div>
                    )
                ))}
            </>
        ) : (
            <></>
        )
    )
}