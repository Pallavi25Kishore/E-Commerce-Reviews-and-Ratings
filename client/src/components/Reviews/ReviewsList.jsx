import React from 'react';
import ReviewTile from "./ReviewTile.jsx";

const ReviewsList = ({currentProductReviews, fetchReviewsList}) => {

return (

<div className="review-list">
  {currentProductReviews.map((review) => {return <ReviewTile review={review} key={review.review_id} fetchReviewsList={fetchReviewsList}/>})}
</div>
);
};

export default ReviewsList;

