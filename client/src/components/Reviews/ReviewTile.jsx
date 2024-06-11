import React from "react";
import StarRating from "./StarRating.jsx";
import CreatedAt from "./CreatedAt.jsx";
import ReviewSummary from "./ReviewSummary.jsx";
import ReviewBody from "./ReviewBody.jsx";
import Recommend from "./Recommend.jsx";
import Response from "./Response.jsx";
import Helpfulness from "./Helpfulness.jsx";

const ReviewTile = ({review, fetchReviewsList}) => {

  return (
    <div>
      <StarRating rating={review.rating}/>
      <CreatedAt name={review.reviewer_name} isoDate={review.date}/>
      <ReviewSummary summary={review.summary}/>
      <ReviewBody body={review.body} photos={review.photos}/>
      <Recommend recommend={review.recommend}/>
      <Response response={review.response}/>
      <Helpfulness reviewid={review.review_id} helpfulness={review.helpfulness} fetchReviewsList={fetchReviewsList}/>
    </div>
  );

};

export default ReviewTile;