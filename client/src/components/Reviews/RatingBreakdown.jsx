import React from 'react';
import StarRating from "./StarRating.jsx";
import RatingBars from "./RatingBars.jsx";

const RatingBreakdown = ({metaData, handleProgressBarClick, starFilter, removeAllStarFilters}) => {

  var roundedAvgRatingNumber = 0;
  var roundedAvgRatingString = '';

  if (metaData) {
    var totalNumberOfRatings = 0;
    var sumOfAllRatings = 0;
    for (var key in metaData.ratings) {
      totalNumberOfRatings += Number(metaData.ratings[key]);
      sumOfAllRatings += (Number(key) * Number(metaData.ratings[key]));
    }

    const avgRating = (sumOfAllRatings / totalNumberOfRatings);
    roundedAvgRatingNumber = Math.round(avgRating * 10) / 10;
    roundedAvgRatingString = (roundedAvgRatingNumber.toFixed(1)) || 0; // to render uptil 1 decimal point eg. 3 is displayed as "3.0"

    var percentageOfReviewsThatRecommend = ((Math.round(((Number(metaData.recommended['true']) / totalNumberOfRatings) * 100) *10)/10).toFixed(1)) || 0; //because of tofixed 30 will be displayed as 30.0
  }

  return (
    <div className="rating-breakdown">
        {(roundedAvgRatingString) ?
        <>
        <div className="avg-rating">
          <strong style={{fontSize: '50px', marginRight: '20px'}}>{roundedAvgRatingString}</strong>

        <StarRating rating={roundedAvgRatingNumber}/>
      </div>
      <div>This product has {totalNumberOfRatings} reviews</div>
      <div>{`${percentageOfReviewsThatRecommend}% of reviews recommended this product`}</div>
      <br></br>
      <div>RATING BREAKDOWN</div>
          {
            (Object.keys(starFilter).length !== 0) ?
            <div>
              <div className="currentfiltersheading">Currently applied filters:</div>
              <div>
               {(Object.keys(starFilter)).map((key) =>  {return <span key={key}>{key} stars </span> })}
              </div>
              <div className="removeallfilters" onClick={removeAllStarFilters}>Remove all filters</div>
            </div>
            :null
          }

      <RatingBars ratings={metaData.ratings} totalNumberOfRatings={totalNumberOfRatings} handleProgressBarClick={handleProgressBarClick} factors={metaData.characteristics}/>
      </>
      : null
    }
    </div>

  );

};

export default RatingBreakdown;