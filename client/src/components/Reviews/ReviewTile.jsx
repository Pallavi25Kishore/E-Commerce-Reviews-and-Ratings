import React from "react";
import StarRating from "./StarRating.jsx";

const ReviewTile = ({review}) => {

  return (
    <StarRating rating={review.rating}/> // add all subcomponents here one by one
  );

};

export default ReviewTile;