import React from 'react';
import StarRating from "./StarRating.jsx";
import RatingBars from "./RatingBars.jsx";

const RatingBreakdown = ({metaData}) => {

  var totalNumberOfRatings = 0;
  var sumOfAllRatings = 0;
  for (var key in metaData.ratings) {
    totalNumberOfRatings += Number(metaData.ratings[key]);
    sumOfAllRatings += (Number(key) * Number(metaData.ratings[key]));
  }

  const avgRating = (sumOfAllRatings / totalNumberOfRatings);
  const roundedAvgRatingNumber = Math.round(avgRating * 10) / 10;
  const roundedAvgRatingString = roundedAvgRatingNumber.toFixed(1); // to render uptil 1 decimal point

  return (
    <div>
      <div className="avg-rating">
        {roundedAvgRatingNumber ?
          <strong style={{fontSize: '50px', marginRight: '20px'}}>{roundedAvgRatingString}</strong>
          : null
        }
        <StarRating rating={roundedAvgRatingNumber}/>
      </div>
      <div>Total reviews: {totalNumberOfRatings}</div>
      <div>Rating Breakdown</div>
      <RatingBars ratings={metaData.ratings} totalNumberOfRatings={totalNumberOfRatings}/>
    </div>

  );

};

export default RatingBreakdown;