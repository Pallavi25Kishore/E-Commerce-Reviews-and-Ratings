import React from 'react';
import ReviewTile from "./ReviewTile.jsx";

const ReviewsList = ({currentProductReviews, fetchReviewsList, starFilter}) => {

if (Object.keys(starFilter).length === 0) { // if no star rating filter are applied
  return (
    <div className="review-list">
      {currentProductReviews.map((review) => {return <ReviewTile review={review} key={review.review_id} fetchReviewsList={fetchReviewsList}/>})}
    </div>
    );
} else { // if a star rating filter is applied
  var filteredListOfReviews = currentProductReviews.filter((review) => {
      if (starFilter[review.rating] !== undefined) {
          return true;
      }
  });
  return (
    <div>
    {(filteredListOfReviews.length !== 0) ?
    <div className="review-list">
      {filteredListOfReviews.map((review) => {return <ReviewTile review={review} key={review.review_id} fetchReviewsList={fetchReviewsList}/>})}
    </div>
    : null
     }
     </div>
    );
}


};

export default ReviewsList;

