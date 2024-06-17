import React, { useEffect, useState } from 'react';
import ProductInfo from './ProductInfo.jsx';
import StyleSelector from './StyleSelector.jsx';
import SizeSelector from './SizeSelector.jsx';
import QuantitySelector from './QuantitySelector.jsx';
import ImageGallery from './ImageGallery.jsx';
import fetchProduct from './ProductController';
import fetchProducts from './ProductListController';
import fetchStyles from './StyleController';

const ProductView = () => {
  const [currentProduct, setCurrentProduct] = useState(null);
  const [styles, setStyles] = useState([]);
  const [selectedStyle, setSelectedStyle] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [availableSizes, setAvailableSizes] = useState([]);
  const [maxQuantity, setMaxQuantity] = useState(0);

  useEffect(() => {
    const loadProduct = async () => {

      const products = await fetchProducts();
      if (products.length > 0) {
        const firstProductId = products[0].id;
        const fetchedProduct = await fetchProduct(firstProductId);
        setCurrentProduct(fetchedProduct);

        const fetchedStyles = await fetchStyles(firstProductId);
        setStyles(fetchedStyles);
        setSelectedStyle(fetchedStyles[0]);
    }
    };
    loadProduct();
  }, []);

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
      </div>
      <div className="right-column">
      {currentProduct && <ProductInfo currentProduct={currentProduct} />}
      <div className="selectors">
      {styles.length > 0 && (
        <StyleSelector styles={styles} onSelectStyle={handleSelectStyle} />
      )}
      {availableSizes.length > 0 && (
        <SizeSelector sizes={availableSizes} onSelectSize={handleSelectSize} />
      )}
      <QuantitySelector maxQuantity={maxQuantity} onSelectQuantity={handleSelectQuantity} />
      </div>
      <div className="add-to-cart">
          <button disabled={!selectedSize || maxQuantity === 0} onClick={() => alert('Added to Cart')}>Add to Cart</button>
        </div>
      </div>

    </div>
  );
};

export default ProductView;
