import React from 'react';
import Share from './Share.jsx';

const ProductInfo = ({ currentProduct }) => {
  const {
    category,
    name,
    default_price,
    sale_price,
    description,
    slogan,
    features,
    rating,
    reviewCount,
  } = currentProduct;

  return (
    <div>
      <h2>{category}</h2>
      <h1>{name}</h1>
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
      <strong></strong>{description && <p>{description}</p>}
      <strong></strong>
      {features && (
        <ul>
          {features.map((feature, index) => (
            <div key={index}>
              <div><strong>{feature.feature}:</strong></div><div>{feature.value}</div>
            </div>
          ))}
        </ul>
      )}
      <Share />
    </div>
  );
};

export default ProductInfo;