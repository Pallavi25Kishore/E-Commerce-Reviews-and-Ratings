import React from 'react';
import StarRating from "../Reviews/StarRating.jsx";
import axios from 'axios';
import {useState, useEffect} from 'react';
import {API_KEY, BASE_URL} from '../../env/config.js'

const ProductInfo = ({ currentProduct }) => {
  const {
    category,
    name,
    default_price,
    sale_price,
    slogan,
  } = currentProduct;
  const [metaData, setMetaData] = useState('');

  var roundedAvgRatingNumber = 0;

  useEffect(() => {
    axios.get(`${BASE_URL}reviews/meta?product_id=${currentProduct.id}`, {headers: {Authorization : API_KEY}})
    .then((response) => {
      setMetaData(response.data);
    })
    .catch((err) => {
      console.log('error in fetching meta data', err);
    });
    }, []);

  if (metaData) {
    var totalNumberOfRatings = 0;
    var sumOfAllRatings = 0;
    for (var key in metaData.ratings) {
      totalNumberOfRatings += Number(metaData.ratings[key]);
      sumOfAllRatings += (Number(key) * Number(metaData.ratings[key]));
    }

    const avgRating = (sumOfAllRatings / totalNumberOfRatings);
    roundedAvgRatingNumber = (Math.round(avgRating * 10) / 10) || 0;
  }

  return (
    <div className="product-info">
      <h2>{category}</h2>
      <h1>{name}</h1>
      <StarRating rating={roundedAvgRatingNumber}/>
      <h3>{slogan}</h3>
      {/*If sale price is defined, display it in red and cross out original price and set*/}
      <strong></strong>{sale_price ? (
        <p>
          <span style={{ color: 'red' }}>${sale_price}</span>{' '}
          <span style={{ textDecoration: 'line-through' }}>${default_price}</span>
        </p>
      ) : (
        <p>${default_price}</p>
      )}
    </div>
  );
};

export default ProductInfo;
