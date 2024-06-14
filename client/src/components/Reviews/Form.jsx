import React, {useState} from 'react';
import StarGenerator from './StarGenerator.jsx';

const Form = () => {         //To do later: render product name dynamically in form - get as prop

  const [reviewBodyText, setReviewBodyText] = useState('');
  const [starFill, setStarFill] = useState([false, false, false, false, false]);
  const [selectedRating, setSelectedRating] = useState('');
  // when working on backend - send all form data including data captured via state first on submit and then re-set state

  let ratingMeaning = ['1 star - "Poor"', '2 stars - "Fair"', '3 stars - "Average"', '4 stars - "Good"', '5 stars - "Great"'];

  const handleFormSubmission = (event) => {
    event.preventDefault(); // complete rest of function later
  };

  const handleReviewBody = (event) => {
    event.preventDefault();
    setReviewBodyText(event.target.value);
  };

  const handleStarClick = (position) => {
    setStarFill(starFill.map((fill, index) => {
      return index < position;
    }));
    setSelectedRating(position);
  };


  return (
    <div className="modalForm">
      <form onSubmit={handleFormSubmission}>
        <div>WRITE YOUR REVIEW</div>
        <div>About the Camo Onesie</div>
        <div className="formHead">Overall rating<sup className="asterix">&#42;</sup></div>
        <div>
        <span className="form-star" onClick={(e) => {e.preventDefault(); handleStarClick(1)}}>{starFill[0] ? '★' : '☆'}</span>
        <span className="form-star" onClick={(e) => {e.preventDefault(); handleStarClick(2)}}>{starFill[1] ? '★' : '☆'}</span>
        <span className="form-star" onClick={(e) => {e.preventDefault(); handleStarClick(3)}}>{starFill[2] ? '★' : '☆'}</span>
        <span className="form-star" onClick={(e) => {e.preventDefault(); handleStarClick(4)}}>{starFill[3] ? '★' : '☆'}</span>
        <span className="form-star" onClick={(e) => {e.preventDefault(); handleStarClick(5)}}>{starFill[4] ? '★' : '☆'}</span>
        <span style={{fontStyle: 'italic'}}>   {selectedRating ? ratingMeaning[selectedRating - 1] : null}</span>
          </div>

        <div className="formHead">Do you recommend this product?<sup className="asterix">&#42;</sup></div>
        <div>
          <input type="radio" name="recommend" id="yes" value="true" checked></input>
          <label htmlFor="yes" checked>Yes</label>
          <input type="radio" name="recommend" id="no" value="false"></input>
          <label htmlFor="no">No</label>
        </div>

        <div className="formHead">Characteristics<sup className="asterix">&#42;</sup></div>

        <label className="formHead" htmlFor="summary">Review Summary</label>
          <input type="text" name="summary" placeholder="Example: Best purchase ever!" maxLength="60" size="100" ></input>
          <br></br>

        <label className="formHead" htmlFor="body">Review Body<sup className="asterix">&#42;</sup></label>
          <input type="text" name="body" placeholder="Why did you like the product or not?" minLength="50" maxLength="1000" size="100" onChange={handleReviewBody} value={reviewBodyText} required></input>
            {(reviewBodyText.length < 50) ?
            <div style={{fontStyle: 'italic'}}>Minimum required characters left: {50 - reviewBodyText.length}</div>
            : <div style={{fontStyle: 'italic'}}>Minimum reached</div>
            }
          <br></br>

        <div className="formHead">Upload your photos</div>
        <br></br>

        <label className="formHead" htmlFor="nickname">What is your nickname?<sup className="asterix">&#42;</sup></label>
          <input type="text" name="nickname" placeholder="Example: jackson11!" maxLength="60" size="100" required></input>
          <div style={{fontStyle: 'italic'}}>For privacy reasons, do not use your full name or email address</div>
          <br></br>

        <label className="formHead" htmlFor="email">Your email<sup className="asterix">&#42;</sup></label>
          <input type="email" name="email" placeholder="Example: jackson11@email.com" maxLength="60" size="100" required></input>
          <div style={{fontStyle: 'italic'}}>For authentication reasons, you will not be emailed</div>
          <br></br>

        <button type="submit">Submit review</button>
      </form>
    </div>
  )

};

export default Form;