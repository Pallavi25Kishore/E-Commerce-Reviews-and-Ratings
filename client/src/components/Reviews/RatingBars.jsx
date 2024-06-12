import React from 'react';

const RatingBars = ({ratings, totalNumberOfRatings, handleProgressBarClick}) => {

  const numOfFiveStars = Number(ratings['5']);
  const Five = (numOfFiveStars / totalNumberOfRatings) * 100;


  const numOfFourStars = Number(ratings['4']);
  const Four = (numOfFourStars / totalNumberOfRatings) * 100;


  const numOfThreeStars = Number(ratings['3']);
  const Three = (numOfThreeStars / totalNumberOfRatings) * 100;


  const numOfTwoStars = Number(ratings['2']);
  const Two = (numOfTwoStars / totalNumberOfRatings) * 100;


  const numOfOneStars = Number(ratings['1']);
  const One = (numOfOneStars / totalNumberOfRatings) * 100;


  return (
    <div>

      <div className="five"  onClick={(e) => {e.preventDefault(); handleProgressBarClick('5')}}>
        <span >5 stars</span>
        <div  style={{position: 'relative', backgroundColor: 'lightgrey', height: '10px', width: '200px', border: '1px solid black', margin: '5px'}}>
          <div style={{height: '100%', width: `${Five}%`, backgroundColor: 'green'}}></div>
        </div>
        <span >{numOfFiveStars}</span>
      </div>

      <div className="four" onClick={(e) => {e.preventDefault(); handleProgressBarClick('4')}}>
        <span>4 stars</span>
        <div style={{position: 'relative', backgroundColor: 'lightgrey', height: '10px', width: '200px', border: '1px solid black', margin: '5px'}}>
          <div style={{height: '100%', width: `${Four}%`, backgroundColor: 'green'}}></div>
        </div>
        <span>{numOfFourStars}</span>
      </div>

      <div className="three" onClick={(e) => {e.preventDefault(); handleProgressBarClick('3')}}>
        <span>3 stars</span>
        <div style={{position: 'relative', backgroundColor: 'lightgrey', height: '10px', width: '200px', border: '1px solid black', margin: '5px'}}>
          <div style={{height: '100%', width: `${Three}%`, backgroundColor: 'green'}}></div>
        </div>
        <span>{numOfThreeStars}</span>
      </div>

      <div className="two" onClick={(e) => {e.preventDefault(); handleProgressBarClick('2')}}>
        <span>2 stars</span>
        <div style={{position: 'relative', backgroundColor: 'lightgrey', height: '10px', width: '200px', border: '1px solid black', margin: '5px'}}>
          <div style={{height: '100%', width: `${Two}%`, backgroundColor: 'green'}}></div>
        </div>
        <span>{numOfTwoStars}</span>
      </div>


      <div className="one" onClick={(e) => {e.preventDefault(); handleProgressBarClick('1')}}>
        <span>1 stars</span>
        <div style={{position: 'relative', backgroundColor: 'lightgrey', height: '10px', width: '200px', border: '1px solid black', margin: '5px'}}>
          <div style={{height: '100%', width: `${One}%`, backgroundColor: 'green'}}></div>
        </div>
        <span>{numOfOneStars}</span>
      </div>

    </div>

   );

};

export default RatingBars;