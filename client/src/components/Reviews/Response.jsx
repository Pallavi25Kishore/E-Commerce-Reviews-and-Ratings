import React from 'react';

const Response = ({response}) => {

  return (
    <div>
    {
      (response) ?
      <div>Response: <br></br> {response}</div>
      : null
    }
    </div>
  )

};

export default Response;