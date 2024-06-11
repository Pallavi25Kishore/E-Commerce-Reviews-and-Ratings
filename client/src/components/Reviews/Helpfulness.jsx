import React from 'react';
import axios from 'axios';
import {BASE_URL, API_KEY} from "../../env/config.js";

const Helpfulness = ({reviewid, helpfulness, fetchReviewsList}) => {

  const handleYesClick = (e) => {
    e.preventDefault();
    axios.put(`${BASE_URL}reviews/${reviewid}/helpful`, {}, {headers: {Authorization : API_KEY}})
    .then((response) => {
      fetchReviewsList();
    })
    .catch((err) => {
      console.log('error in updating helpfulness count', err);
    });
  };

  const handleReportClick = (e) => {
    e.preventDefault();
    axios.put(`${BASE_URL}reviews/${reviewid}/report`, {}, {headers: {Authorization : API_KEY}})
    .then((response) => {
      fetchReviewsList();
    })
    .catch((err) => {
      console.log('error in reporting a review', err);
    });
  };

  return (
    <div>
      <span>Helpful? </span>
      <span data-testid="yes" onClick={handleYesClick} style={{textDecoration : 'underline'}}>Yes</span>
      <span data-testid="count">{`(${helpfulness})`}</span>
      <span>  |  </span>
      <span onClick={handleReportClick} style={{textDecoration : 'underline'}}>Report</span>
      <hr></hr>
      <br></br>
    </div>
  )

};

export default Helpfulness;