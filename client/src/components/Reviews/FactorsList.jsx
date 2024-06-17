import React from 'react';
import Factor from './Factor.jsx';

const FactorsList = ({factors}) => {
  if (factors === undefined) {
    return <></>
  }

  var factorsArray = Object.keys(factors);


  return (
    <div>
      {factorsArray.map((factor) => {
        return <Factor factor={factor} value={factors[factor].value} key={factors[factor].id}/>
      })}
    </div>
  )

};

export default FactorsList;
