import React from "react";
import StarRating from "./StarRating.jsx";
import CreatedAt from "./CreatedAt.jsx";
import ReviewSummary from "./ReviewSummary.jsx";
import ReviewBody from "./ReviewBody.jsx";

const ReviewTile = ({review}) => {
  return (
    <div>
      <StarRating rating={review.rating}/>
      <CreatedAt isoDate={review.date}/>
      <ReviewSummary summary={review.summary}/>
      <ReviewBody body={review.body} photos={review.photos}/>
    </div>
  );

};

export default ReviewTile;