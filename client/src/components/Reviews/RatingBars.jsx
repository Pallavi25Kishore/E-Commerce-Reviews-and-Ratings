import React from 'react';
import FactorsList from './FactorsList.jsx';

const RatingBars = ({ratings, totalNumberOfRatings, handleProgressBarClick, factors}) => {

  const numOfFiveStars = Number(ratings['5']) || 0; // in case no rating has been given, it should be treated as zero
  const Five = (numOfFiveStars / totalNumberOfRatings) * 100;


  const numOfFourStars = Number(ratings['4']) || 0;
  const Four = (numOfFourStars / totalNumberOfRatings) * 100;


  const numOfThreeStars = Number(ratings['3']) || 0;
  const Three = (numOfThreeStars / totalNumberOfRatings) * 100;


  const numOfTwoStars = Number(ratings['2']) || 0;
  const Two = (numOfTwoStars / totalNumberOfRatings) * 100;


  const numOfOneStars = Number(ratings['1']) || 0;
  const One = (numOfOneStars / totalNumberOfRatings) * 100;


  return (
    <div className="rating-bars">
      <br></br>
      <div className="five"  onClick={(e) => {e.preventDefault(); handleProgressBarClick('5')}}>
        <span >5 stars</span>
        <div  className="five-grey">
          <div data-testid="fivestar" style={{height: '100%', width: `${Five}%`, backgroundColor: 'green'}}></div>
        </div>
        <span >{numOfFiveStars}</span>
      </div>

      <div className="four" onClick={(e) => {e.preventDefault(); handleProgressBarClick('4')}}>
        <span>4 stars</span>
        <div className="four-grey">
          <div data-testid="fourstar" style={{height: '100%', width: `${Four}%`, backgroundColor: 'green'}}></div>
        </div>
        <span>{numOfFourStars}</span>
      </div>

      <div className="three" onClick={(e) => {e.preventDefault(); handleProgressBarClick('3')}}>
        <span>3 stars</span>
        <div className="three-grey">
          <div data-testid="threestar" style={{height: '100%', width: `${Three}%`, backgroundColor: 'green'}}></div>
        </div>
        <span>{numOfThreeStars}</span>
      </div>

      <div className="two" onClick={(e) => {e.preventDefault(); handleProgressBarClick('2')}}>
        <span>2 stars</span>
        <div className="two-grey">
          <div data-testid="twostar" style={{height: '100%', width: `${Two}%`, backgroundColor: 'green'}}></div>
        </div>
        <span>{numOfTwoStars}</span>
      </div>


      <div className="one" onClick={(e) => {e.preventDefault(); handleProgressBarClick('1')}}>
        <span>1 stars</span>
        <div className="one-grey">
          <div data-testid="onestar" style={{height: '100%', width: `${One}%`, backgroundColor: 'green'}}></div>
        </div>
        <span>{numOfOneStars}</span>
      </div>

      <br></br>
      <br></br>
      <FactorsList factors={factors}/>
    </div>

   );

};

export default RatingBars;