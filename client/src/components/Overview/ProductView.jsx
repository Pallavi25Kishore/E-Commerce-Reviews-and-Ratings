import React, { useEffect, useState } from 'react';
import ProductInfo from './ProductInfo.jsx';
import fetchProduct from './ProductController.js';
import fetchProducts from './ProductListController.js';

const ProductView = () => {
  const [currentProduct, setCurrentProduct] = useState(null);

  useEffect(() => {
    const loadProduct = async () => {
      const products = await fetchProducts();
      if (products.length > 0) {
        const firstProductId = products[0].id;
        const fetchedProduct = await fetchProduct(firstProductId);
        setCurrentProduct(fetchedProduct);
      }
    };
    loadProduct();
  }, []);

  return <div>{currentProduct && <ProductInfo currentProduct={currentProduct} />}</div>;
};

export default ProductView;