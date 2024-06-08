import React from "react";
import StarRating from "./StarRating.jsx";
import CreatedAt from "./CreatedAt.jsx";

const ReviewTile = ({review}) => {
  console.log(review.date);
  return (
    <>
      <StarRating rating={review.rating}/>
      <CreatedAt isoDate={review.date}/>
    </>
  );

};

export default ReviewTile;