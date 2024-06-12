
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {BASE_URL, API_KEY} from "../../env/config.js";
import ReviewsList from "./ReviewsList.jsx";
import Sort from "./Sort.jsx";
import RatingBreakdown from "./RatingBreakdown.jsx";


const Reviews = () => { //pass product_id as prop from App - DO LATER - use for both get requests - reviews and metadata

  const [currentProductReviews, setCurrentProductReviews] = useState([]);
  const [currentSort, setCurrentSort] = useState('relevant');
  const [metaData, setMetaData] = useState('');
  const [starFilter, setStarFilter] = useState({});


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
    axios.get(`${BASE_URL}reviews/meta?product_id=40380`, {headers: {Authorization : API_KEY}})
    .then((response) => {
      setMetaData(response.data);
    })
    .catch((err) => {
      console.log('error in fetching meta data', err);
    });
    }, []);

  useEffect(() => {
    fetchReviewsList(currentSort);
    }, [currentSort]);

    const changeSort = (value) => {
      setCurrentSort(value);
    };

    const handleProgressBarClick = (value) => {
      if (starFilter[value] === undefined) {
        var newObj = {...starFilter};
        newObj[value] = true;
        setStarFilter(newObj);
      } else {
        var newObj = {...starFilter};
        delete newObj[value];
        setStarFilter(newObj);
      }
    };

  const removeAllStarFilters = (e) => {
    e.preventDefault();
    setStarFilter({});
  }


  console.log(currentProductReviews);
  console.log(metaData);
  return (
    <div>
    <RatingBreakdown metaData={metaData} handleProgressBarClick={handleProgressBarClick} starFilter={starFilter} removeAllStarFilters={removeAllStarFilters}/>
    <Sort changeSort={changeSort}/>
    <ReviewsList currentProductReviews={currentProductReviews} fetchReviewsList={fetchReviewsList} starFilter={starFilter}/>
    </div>
  )
};

export default Reviews;