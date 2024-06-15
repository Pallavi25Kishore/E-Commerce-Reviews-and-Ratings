import React, {useState, useEffect} from 'react';
import isValidUrl from './validUrlCheck.js';

const Form = ({metaData}) => {         //To do later: render product name dynamically in form - get as prop

  const [reviewBodyText, setReviewBodyText] = useState('');
  const [starFill, setStarFill] = useState([false, false, false, false, false]);
  const [selectedRating, setSelectedRating] = useState('');
  const [applicableCharacteristics, setApplicableCharacteristics] = useState({}); // eg {size: 2, length : null} - 2 means second radio button selected
  // when working on backend - send all form data including data captured via state first on submit and then re-set state
  const [uploadedPhotos, setUploadedPhotos] = useState([]);

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

  if (metaData) {

    useEffect (()=> {
      var newObj = {}
      for (var key in metaData.characteristics) {
        newObj[key] = null; // current selected value
      }
    setApplicableCharacteristics(newObj);
    }, []);

  }

  var factorDetails = {
    Size: ["A size too small", "1/2 a size too small", "Perfect", "1/2 a size too big", "A size too wide"],
    Width: ["Too narrow", "Slightly narrow", "Perfect", "Slightly wide", "Too wide"],
    Comfort: ["Uncomfortable", "Slightly uncomfortable", "Ok", "Comfortable", "Perfect"],
    Quality: ["Poor", "Below average", "What I expected", "Pretty great", "Perfect"],
    Length: ["Runs Short", "Runs slightly short", "Perfect", "Runs slightly long", "Runs long"],
    Fit: ["Runs tight", "Runs slightly tight", "Perfect", "Runs slightly long", "Runs long"]
  };

  const handleFactorRadioButtonSelection = (factorName, value) => {
    var newObj = {...applicableCharacteristics};
    newObj[factorName] = value;
    setApplicableCharacteristics(newObj);
  };

  const handlePhotoUploadButton = (e) => {
    e.preventDefault();
    var url = prompt('Enter photo url');
    if (isValidUrl(url)) {
      var newArray = [...uploadedPhotos, url];
      setUploadedPhotos(newArray);
    } else {
      alert("Enter valid url");
    }

  };

  return (
    <div className="modalForm">
      <form onSubmit={handleFormSubmission}>
        <div>WRITE YOUR REVIEW</div>
        <div>About the Camo Onesie</div>
        <br></br>
        <div className="formHead">Overall rating<sup className="asterix">&#42;</sup></div>
        <div>
        <span className="form-star" onClick={(e) => {e.preventDefault(); handleStarClick(1)}}>{starFill[0] ? '★' : '☆'}</span>
        <span className="form-star" onClick={(e) => {e.preventDefault(); handleStarClick(2)}}>{starFill[1] ? '★' : '☆'}</span>
        <span className="form-star" onClick={(e) => {e.preventDefault(); handleStarClick(3)}}>{starFill[2] ? '★' : '☆'}</span>
        <span className="form-star" onClick={(e) => {e.preventDefault(); handleStarClick(4)}}>{starFill[3] ? '★' : '☆'}</span>
        <span className="form-star" onClick={(e) => {e.preventDefault(); handleStarClick(5)}}>{starFill[4] ? '★' : '☆'}</span>
        <span style={{fontStyle: 'italic'}}>   {selectedRating ? ratingMeaning[selectedRating - 1] : null}</span>
          </div>
        <br></br>
        <div className="formHead">Do you recommend this product?<sup className="asterix">&#42;</sup></div>
        <div>
          <input type="radio" name="recommend" id="yes" value="true" defaultChecked></input>
          <label htmlFor="yes">Yes</label>
          <input type="radio" name="recommend" id="no" value="false"></input>
          <label htmlFor="no">No</label>
        </div>
        <br></br>

        <div className="formHead">Characteristics<sup className="asterix">&#42;</sup></div>
        <br></br>
        <div>
        {applicableCharacteristics ? <>{Object.keys(applicableCharacteristics).map((factor) => {
           return (<div>
            <div style={{fontWeight: 'bold'}}>{factor}</div>
            <div>Current Selection: {(applicableCharacteristics[factor]) !== null ? `${factorDetails[factor][applicableCharacteristics[factor] - 1]}`:"none selected"}</div>

            <label htmlFor="1">1</label>
            <input type="radio" name={factor} id="1" value="1" onChange={(e) => {handleFactorRadioButtonSelection(factor, 1)}} defaultChecked={applicableCharacteristics[factor] === 1 ? true : null}></input>
            <label htmlFor="2">2</label>
            <input type="radio" name={factor} id="2" value="2" onChange={(e) => {handleFactorRadioButtonSelection(factor, 2)}} defaultChecked={applicableCharacteristics[factor] === 2 ? true : null}></input>
            <label htmlFor="3">3</label>
            <input type="radio" name={factor} id="3" value="3" onChange={(e) => {handleFactorRadioButtonSelection(factor, 3)}} defaultChecked={applicableCharacteristics[factor] === 3 ? true : null}></input>
            <label htmlFor="4">4</label>
            <input type="radio" name={factor} id="4" value="4" onChange={(e) => {handleFactorRadioButtonSelection(factor, 4)}} defaultChecked={applicableCharacteristics[factor] === 4 ? true : null}></input>
            <label htmlFor="5">5</label>
            <input type="radio" name={factor} id="5" value="5" onChange={(e) => {handleFactorRadioButtonSelection(factor, 5)}} defaultChecked={applicableCharacteristics[factor] === 5 ? true : null}></input>
            <div>1 - {factorDetails[factor][0]}</div><div>5 - {factorDetails[factor][4]}</div>
            <br></br>
            </div>);
        })
        }</>
        : null}
        </div>
        <br></br>

        <label className="formHead" htmlFor="summary">Review Summary</label>
          <input type="text" name="summary" placeholder="Example: Best purchase ever!" maxLength="60" size="100" ></input>
          <br></br>
          <br></br>

        <label className="formHead" htmlFor="body">Review Body<sup className="asterix">&#42;</sup></label>
          <input type="text" name="body" placeholder="Why did you like the product or not?" minLength="50" maxLength="1000" size="100" onChange={handleReviewBody} value={reviewBodyText} required></input>
            {(reviewBodyText.length < 50) ?
            <div style={{fontStyle: 'italic'}}>Minimum required characters left: {50 - reviewBodyText.length}</div>
            : <div style={{fontStyle: 'italic'}}>Minimum reached</div>
            }
          <br></br>

        <div className="formHead">Upload your photos</div>
        <>{ uploadedPhotos.length < 5 ?
        <button onClick={handlePhotoUploadButton}>Click to upload photos</button> : null}</>
        <div>{uploadedPhotos.length !== 0 ? uploadedPhotos.map((url) => {
            return <img src={url} style={{height: '50px', width: '50px', borderRadius: '10%'}}></img>
        })
        : null}</div>
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