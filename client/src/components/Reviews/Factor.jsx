import React from 'react';
import InvertedTriangle from './InvertedTriangle.jsx';

const Factor = ({factor, value}) => {

  const labels = {
    "Size" : ["Too small", "Perfect", "Too big"],
    "Width" : ["Too narrow", "Perfect", "Too wide"],
    "Length" : ["Runs short", "Perfect", "Runs long"],
    "Quality" : ["Poor", null,  "Perfect"],
    "Fit" : ["Runs tight", "Perfect", "Runs long"],
    "Comfort" : ["Poor", null, "Perfect"]
  };

  var percentage = (value/5) * 100;


  return (
    <div className="factors-breakdown">
      <div className="factor-name">{factor}</div>

      <div className="bars-container-wrapper">
      <div className="bars-container">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div className="pointer" style={{width: '20px', height: '20px', zIndex: '2', position: 'absolute', left: `calc(${percentage}% - 10px`}} data-testid="pointer">
        <InvertedTriangle />
      </div>
      </div>

      <div className="factor-label">{labels[factor].map((label, index) => {return <span key={index}>{label} </span>})}</div>
    </div>

  );

};

export default Factor;
