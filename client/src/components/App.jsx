import React from "react";
import ReviewsList from "./Reviews/ReviewsList.jsx";
import ProductView from './Overview/ProductView.jsx';
import QuestionList from "./QA/QuestionList.jsx";
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

const App =() =>{
    return <>
    <ProductView/>
    <QuestionList/>
    <ReviewsList/>
    </>
}


export default App;