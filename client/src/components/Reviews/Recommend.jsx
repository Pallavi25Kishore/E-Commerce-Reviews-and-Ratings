import React from 'react';

const Recommend = ({recommend}) => {

  return (
    <div>
    {(recommend) ?
    <div>&#10003; I recommend this product </div>
    : null
    }
    </div>
  );

};

export default Recommend;