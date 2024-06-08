import React from "react";
import StarRating from "./StarRating.jsx";
import CreatedAt from "./CreatedAt.jsx";

const ReviewTile = ({review}) => {
  return (
    <>
      <StarRating rating={review.rating}/>
      <CreatedAt isoDate={review.date}/>
    </>
  );

};

export default ReviewTile;