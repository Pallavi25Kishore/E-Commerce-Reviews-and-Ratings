import React from 'react';

const Response = ({response}) => {

  return (
    <div>
    {
      (response) ?
      <div className="review-response-from-seller">Response: <br></br> {response}</div>
      : null
    }
    </div>
  )

};

export default Response;