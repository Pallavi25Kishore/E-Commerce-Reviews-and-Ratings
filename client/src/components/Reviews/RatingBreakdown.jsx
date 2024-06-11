import React from 'react';
import StarRating from "./StarRating.jsx";
import RatingBars from "./RatingBars.jsx";

const RatingBreakdown = ({metaData}) => {

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
      <RatingBars ratings={metaData.ratings} totalNumberOfRatings={totalNumberOfRatings}/>
      </>
      : null
    }
    </div>

  );

};

export default RatingBreakdown;