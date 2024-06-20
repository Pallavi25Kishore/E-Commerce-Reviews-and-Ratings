
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {BASE_URL, API_KEY} from "../../env/config.js";
import Sort from "./Sort.jsx";
import RatingBreakdown from "./RatingBreakdown.jsx";
import AddReview from "./AddReview.jsx";
import SearchBar from "./SearchBar.jsx";
import SearchFilter from "./SearchFilter.jsx";
import CountFilterReviewsList from "./CountFilterReviewsList.jsx";


const Reviews = () => { //pass product_id and product name as prop from App - DO LATER - use for both get requests - reviews and metadata

  //for now using product name - Camo Onesie - pass name as prop once consolidate code - pass till Form.jsx

  const [currentProductReviews, setCurrentProductReviews] = useState([]);
  const [currentSort, setCurrentSort] = useState('relevant');
  const [metaData, setMetaData] = useState('');
  const [starFilter, setStarFilter] = useState({});
  const [totalReviews, setTotalReviews] = useState(0);
  const [showMoreReviews, setShowMoreReviews] = useState(true);
  const [searchText, setSearchText] = useState('');


   // LATER - Move to APP.JS - Combine with Michael's code
//Pass currentProductId from App.js - as a prop and render list for current product based on product id.

//Using hard coded example data for now - CHANGE LATER for initial mounting

  const fetchReviewsList = (sort = currentSort, count = totalReviews) => {
    axios.get(`${BASE_URL}reviews?page=1&count=${count}&sort=${sort}&product_id=40347`, {headers: {Authorization : API_KEY}})
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
    if (metaData.ratings) {
      var totalNumberOfRatings = 0;
      for (var key in metaData.ratings) {
        totalNumberOfRatings += Number(metaData.ratings[key]);
      }
      setTotalReviews(totalNumberOfRatings);
    }
  }, [metaData]);

  useEffect(() => {
    fetchReviewsList(currentSort, totalReviews);
    }, [totalReviews]);

  useEffect(() => {
    fetchReviewsList(currentSort, totalReviews);
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
  };

  const handleShowMoreReviewsClick = (e) => {
    e.preventDefault();
    setShowMoreReviews(false);
  };

  const handleSearchBarChange = (searchTerm) => {
      setSearchText(searchTerm);
  };


  console.log(currentProductReviews); //delete later
  console.log(metaData); //delete later
  return (
    <div>
      <div className="head">REVIEWS & RATINGS</div>
    <div className="ratings-and-reviews">
        <div className="left-panel">
            <RatingBreakdown metaData={metaData} handleProgressBarClick={handleProgressBarClick} starFilter={starFilter} removeAllStarFilters={removeAllStarFilters}/>
        </div>
        <div className="center-panel">
            <div className="center-upper-sort-and-search-panel">
                <Sort changeSort={changeSort}/>
                <SearchBar handleSearchBarChange={handleSearchBarChange}/>
            </div>
            <SearchFilter currentProductReviews={currentProductReviews} fetchReviewsList={fetchReviewsList} starFilter={starFilter} totalReviews={totalReviews} showMoreReviews={showMoreReviews} searchText={searchText}/>
            <div className="center-lower-fixed-buttons-panel">
                {totalReviews > 2 && showMoreReviews ?
                <button onClick={handleShowMoreReviewsClick}className="more-review-button">More Reviews</button>
                : null }
                <AddReview metaData={metaData}/>
            </div>
        </div>
          <div className="right-panel"></div>
    </div>
    </div>
  )
};

export default Reviews;