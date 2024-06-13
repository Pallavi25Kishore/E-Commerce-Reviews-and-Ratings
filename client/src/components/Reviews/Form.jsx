import React, {useState} from 'react';
import StarGenerator from './StarGenerator.jsx';

const Form = () => {         //To do later: render product name dynamically in form - get as prop

  const [reviewBodyText, setReviewBodyText] = useState('')
  const handleFormSubmission = (event) => {
    event.preventDefault(); // complete rest of function later
  };

  const handleReviewBody = (event) => {
    event.preventDefault();
    setReviewBodyText(event.target.value);
  };


  return (
    <div className="modalForm">
      <form onSubmit={handleFormSubmission}>
        <div>WRITE YOUR REVIEW</div>
        <div>About the Camo Onesie</div>
        <div className="formHead">Overall rating<sup className="asterix">&#42;</sup></div>
        {var arr = [];
        for (s = 1; s <= 5; s++) {
          <span>{<StarGenerator fillrating={0} />}</span>}

        }



        <div className="formHead">Do you recommend this product?<sup className="asterix">&#42;</sup></div>

        <div className="formHead">Characteristics<sup className="asterix">&#42;</sup></div>

        <label className="formHead" htmlFor="summary">Review Summary</label>
          <input type="text" name="summary" placeholder="Example: Best purchase ever!" maxlength="60" size="100" ></input>
          <br></br>

        <label className="formHead" htmlFor="body">Review Body<sup className="asterix">&#42;</sup></label>
          <input type="text" name="body" placeholder="Why did you like the product or not?" minlength="50" maxlength="1000" size="100" onChange={handleReviewBody} value={reviewBodyText} required></input>
            {(reviewBodyText.length < 50) ?
            <div style={{fontStyle: 'italic'}}>Minimum required characters left: {50 - reviewBodyText.length}</div>
            : <div style={{fontStyle: 'italic'}}>Minimum reached</div>
            }
          <br></br>

        <div className="formHead">Upload your photos</div>
        <br></br>

        <label className="formHead" htmlFor="nickname">What is your nickname?<sup className="asterix">&#42;</sup></label>
          <input type="text" name="nickname" placeholder="Example: jackson11!" maxlength="60" size="100" required></input>
          <div style={{fontStyle: 'italic'}}>For privacy reasons, do not use your full name or email address</div>
          <br></br>

        <label className="formHead" htmlFor="email">Your email<sup className="asterix">&#42;</sup></label>
          <input type="email" name="email" placeholder="Example: jackson11@email.com" maxlength="60" size="100" required></input>
          <div style={{fontStyle: 'italic'}}>For authentication reasons, you will not be emailed</div>
          <br></br>

        <button type="submit">Submit review</button>
      </form>
    </div>
  )

};

export default Form;