import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {BASE_URL, API_KEY} from "../../env/config.js";
import ReviewTile from "./ReviewTile.jsx";

const ReviewsList = () => {

const [currentProductReviews, setCurrentProductReviews] = useState([]); // LATER - Move to APP.JS - Combine with Michael's code
//Pass currentProductId from App.js - as a prop and render list for current product based on product id.

//Using hard coded example data for product id 3 for now - CHANGE LATER for initial mounting

useEffect(() => {
  axios.get(`${BASE_URL}reviews?page=1&count=30&sort="newest"&product_id=40380`, {headers: {Authorization : API_KEY}})
  .then((response) => {
    setCurrentProductReviews(response.data.results);
  })
  .catch((err) => {
    console.log('error in fetching reviews list data', err);
  });
}, []);


console.log(currentProductReviews);
return (

<div className="review-list">
  {currentProductReviews.map((review) => {return <ReviewTile review={review} key={review.review_id}/>})}
</div>
);
};

export default ReviewsList;

