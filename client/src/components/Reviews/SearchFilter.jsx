import React from 'react';
import CountFilterReviewsList from "./CountFilterReviewsList.jsx";

const SearchFilter = ({currentProductReviews, fetchReviewsList, starFilter, totalReviews, showMoreReviews, searchText}) => {

  if (currentProductReviews) { // to start rendering only after currentProductList is there

    if (!searchText || searchText.length < 3) {
        return <CountFilterReviewsList currentProductReviews={currentProductReviews} fetchReviewsList={fetchReviewsList} starFilter={starFilter} totalReviews={totalReviews} showMoreReviews={showMoreReviews}/>
    } else {
         var filteredArray = currentProductReviews.filter((review) => {
          var arrayOfText = [];
             if (review.body) {
              arrayOfText.push(review.body.toLowerCase());
             }
             if (review.summary) {
              arrayOfText.push(review.summary.toLowerCase());
             }
             if (review.reviewer_name) {
              arrayOfText.push(review.reviewer_name.toLowerCase());
             }
             for (var d = 0; d < arrayOfText.length; d++) {
               if (arrayOfText[d].includes(searchText.toLowerCase())) {
                 return true;
                 break;
               }
             }
         });
      var numberOfFilteredReviews = filteredArray.length;
      return <CountFilterReviewsList currentProductReviews={filteredArray} fetchReviewsList={fetchReviewsList} starFilter={starFilter} totalReviews={numberOfFilteredReviews} showMoreReviews={showMoreReviews}/>; // total reviews count will be the number of filtered reviews that match the search text
    }

  } else {
    return null;
  }

};

export default SearchFilter;












