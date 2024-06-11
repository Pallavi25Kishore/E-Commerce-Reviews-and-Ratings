
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {BASE_URL, API_KEY} from "../../env/config.js";
import ReviewsList from "./ReviewsList.jsx";
import Sort from "./Sort.jsx";


const Reviews = () => {

  const [currentProductReviews, setCurrentProductReviews] = useState([]);
  const [currentSort, setCurrentSort] = useState('relevant');


   // LATER - Move to APP.JS - Combine with Michael's code
//Pass currentProductId from App.js - as a prop and render list for current product based on product id.

//Using hard coded example data for now - CHANGE LATER for initial mounting

  const fetchReviewsList = (sort = currentSort) => {
    axios.get(`${BASE_URL}reviews?page=1&count=30&sort=${sort}&product_id=40380`, {headers: {Authorization : API_KEY}})
    .then((response) => {
      setCurrentProductReviews(response.data.results);
    })
    .catch((err) => {
      console.log('error in fetching reviews list data', err);
    });
  };

  useEffect(() => {
    fetchReviewsList(currentSort);
    }, [currentSort]);

    const changeSort = (value) => {
      setCurrentSort(value);
    };



  console.log(currentProductReviews);
  return (
    <div>
    <Sort changeSort={changeSort}/>
    <ReviewsList currentProductReviews={currentProductReviews} fetchReviewsList={fetchReviewsList}/>
    </div>
  )
};

export default Reviews;