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
    roundedAvgRatingString = roundedAvgRatingNumber.toFixed(1); // to render uptil 1 decimal point
  }


  return (
    <div>
        {(roundedAvgRatingString) ?
        <>
        <div className="avg-rating">
          <strong style={{fontSize: '50px', marginRight: '20px'}}>{roundedAvgRatingString}</strong>

        <StarRating rating={roundedAvgRatingNumber}/>
      </div>
      <div>Total reviews: {totalNumberOfRatings}</div>
      <div>Rating Breakdown</div>
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

      <RatingBars ratings={metaData.ratings} totalNumberOfRatings={totalNumberOfRatings} handleProgressBarClick={handleProgressBarClick}/>
      </>
      : null
    }
    </div>

  );

};

export default RatingBreakdown;