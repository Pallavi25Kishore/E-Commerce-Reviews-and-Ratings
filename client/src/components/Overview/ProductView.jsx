import React, { useEffect, useState } from 'react';
import ProductInfo from './ProductInfo.jsx';
import StyleSelector from './StyleSelector.jsx';
import SizeSelector from './SizeSelector.jsx';
import QuantitySelector from './QuantitySelector.jsx';
import ImageGallery from './ImageGallery.jsx';
import Share from './Share.jsx';

const ProductView = ({ currentProduct, styles, selectedStyle, setSelectedStyle }) => {
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [availableSizes, setAvailableSizes] = useState([]);
  const [maxQuantity, setMaxQuantity] = useState(0);


  useEffect(() => {
    if (selectedStyle) {
      const sizes = Object.keys(selectedStyle.skus).map((skuId) => ({
        size: selectedStyle.skus[skuId].size,
        quantity: selectedStyle.skus[skuId].quantity,
      }));
      setAvailableSizes(sizes);
      setMaxQuantity(0);
      setSelectedSize('');
      setSelectedQuantity(1);
    }
  }, [selectedStyle]);

  const handleSelectStyle = (style) => {
    setSelectedStyle(style);
    console.log(style.name);
  };

  const handleSelectSize = (size) => {
    setSelectedSize(size);
    const sku = Object.values(selectedStyle.skus).find(sku => sku.size === size);
    if (sku) {
      setMaxQuantity(sku.quantity);
    }
  };

  const handleSelectQuantity = (quantity) => {
    setSelectedQuantity(quantity);
  };

  return (
    <div className="product-view">
      <div className="left-column">
        {selectedStyle && <ImageGallery images={selectedStyle.photos} />}
        {currentProduct && (
          <div className="product-description">
            {currentProduct.description && <p>{currentProduct.description}</p>}
            {currentProduct.features && (
              <ul>
                {currentProduct.features.map((feature, index) => (
                  <li key={index}>
                    <strong>{feature.feature}:</strong> {feature.value}
                  </li>
                ))}
              </ul>
            )}
            <Share />
          </div>
        )}
      </div>
      <div className="right-column">
        {currentProduct && <ProductInfo currentProduct={currentProduct} />}
        <div className="selectors">
          {selectedStyle && <h3>{selectedStyle.name}</h3>}
          {styles.length > 0 && (
            <StyleSelector styles={styles} selectedStyleId={selectedStyle?.style_id} onSelectStyle={handleSelectStyle} />
          )}
          <div className="selectors-row">
            {availableSizes.length > 0 && (
              <SizeSelector data-testid="size-selector" sizes={availableSizes} onSelectSize={handleSelectSize} />
            )}
            <QuantitySelector data-testid="quantity-selector" maxQuantity={maxQuantity} onSelectQuantity={handleSelectQuantity} />
            <div className="add-to-cart">
              <button disabled={!selectedSize || maxQuantity === 0} onClick={() => alert('Added to Cart')}>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
