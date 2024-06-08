import React from "react";
import StarRating from "./StarRating.jsx";
import CreatedAt from "./CreatedAt.jsx";
import ReviewSummary from "./ReviewSummary.jsx";

const ReviewTile = ({review}) => {
  return (
    <>
      <StarRating rating={review.rating}/>
      <CreatedAt isoDate={review.date}/>
      <ReviewSummary summary={review.summary}/>
    </>
  );

};

export default ReviewTile;