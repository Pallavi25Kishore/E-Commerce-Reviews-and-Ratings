import React, { useEffect, useState } from "react";
import ProductView from './Overview/ProductView.jsx';
import QuestionList from "./QA/QuestionList.jsx";
import Reviews from "./Reviews/Reviews.jsx";
import fetchProduct from './Overview/ProductController';
import fetchProducts from './Overview/ProductListController';
import fetchStyles from './Overview/StyleController';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>


const App = () => {
    const [currentProduct, setCurrentProduct] = useState(null);
    const [productId, setProductId] = useState(0);
    const [styles, setStyles] = useState([]);
    const [selectedStyle, setSelectedStyle] = useState(null);

  useEffect(() => {
    const loadProduct = async () => {
      const products = await fetchProducts();
      if (products.length > 0) {
        setProductId(products[2].id);
      }
    };
    loadProduct();
  }, []);

    useEffect(() => {
        const loadProductDetails = async () => {
            const fetchedProduct = await fetchProduct(productId);
            setCurrentProduct(fetchedProduct);
            const fetchedStyles = await fetchStyles(productId);
            setStyles(fetchedStyles);
            setSelectedStyle(fetchedStyles[0]); // Select the first style by default
        };
        if (productId !== null) {
            loadProductDetails();
        }
    }, [productId]);
    const handleNextProduct = () => {
        setProductId(productId + 1);
    };
    const handlePreviousProduct = () => {
        setProductId(productId - 1);
    };
    return (
        <>
            <img className="logo" src="/client/src/assets/Logo.jpg" alt="My Image"></img>

            <ProductView
                currentProduct={currentProduct}
                styles={styles}
                selectedStyle={selectedStyle}
                setSelectedStyle={setSelectedStyle}
            />
            <button className="next-button" onClick={handlePreviousProduct}>Previous Product</button>
            <button className="next-button" onClick={handleNextProduct}>Next Product</button>

            <QuestionList productId={productId} />
      {currentProduct ? <Reviews currentProduct={currentProduct}/> : null }

    </>
  );
};

export default App;
