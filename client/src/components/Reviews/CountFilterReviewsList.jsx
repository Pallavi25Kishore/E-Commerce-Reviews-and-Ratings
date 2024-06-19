import React from 'react';
import StarFilterReviewsList from './StarFilterReviewsList.jsx';

const CountFilterReviewsList = ({currentProductReviews, fetchReviewsList, starFilter, totalReviews, showMoreReviews}) => {

if (totalReviews === 0) { // if no reviews - number of reviews is zero
  return <div></div>
} else if (totalReviews === 1 || totalReviews === 2) { // if 1 or 2 reviews, pass entire list of 1 or 2 reviews as the case maybe
  return <StarFilterReviewsList currentProductReviews={currentProductReviews} fetchReviewsList={fetchReviewsList} starFilter={starFilter}/>
} else if (totalReviews > 2) { // if more than 2 reviews
  if (showMoreReviews) { // if show more button is visible and has not been clicked yet - showmorereviews is true
    return <StarFilterReviewsList currentProductReviews={currentProductReviews.slice(0,2)} fetchReviewsList={fetchReviewsList} starFilter={starFilter}/>
  } else { // if show more button has been clicked and is not visible anymore - its value is false
    return <StarFilterReviewsList currentProductReviews={currentProductReviews} fetchReviewsList={fetchReviewsList} starFilter={starFilter}/>
  }
}

};

export default CountFilterReviewsList;


// if zero reviews  - return empty div
// if 1 or 2 reviews - morereviews button to not show - so showmore values is true ---- pass the entire list of 1 or 2 reviews into next component
// if more than 2 then till not click show more - showMoreReviews value is true --- if value is true - pass only list of 2
// if more ethan 2 then when click show more - showMoreReviews value is false --- if value if false - pass entire list of reviews