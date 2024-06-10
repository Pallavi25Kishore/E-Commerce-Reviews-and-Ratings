import React from 'react';

const Response = ({response}) => {

  return (
    <div>
    {
      (response) ?
      <div>{`Response:\n ${response}`}</div>
      : null
    }
    </div>
  )

};

export default Response;