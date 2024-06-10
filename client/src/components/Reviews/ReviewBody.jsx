import React, {useState} from 'react';
import Thumbnail from './Thumbnail.jsx';

const isValidUrl = (url) => {
  const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
  return urlRegex.test(url);
};

const ReviewBody = ({body, photos}) => {

  const [showMore, setShowMore] = useState(false);

  const handleShowMoreClick = (event) => {
    event.preventDefault();
    setShowMore(true);
  };

  const handleShowLessClick = (event) => {
    event.preventDefault();
    setShowMore(false);
  };

  return (
    <>
      {
        (body.length <= 250) ?
          <div>{body}</div> :
          (showMore) ?
            <>
              <div>{body}</div>
              <span onClick={handleShowLessClick}>...Show Less</span>
            </> :
            <>
              <div>{body.slice(0, 250)}</div>
              <span onClick={handleShowMoreClick}>...Show More</span>
            </>
      }
      <div>
        {
        (photos.length) ?
        photos.map((photo) => { return isValidUrl(photo.url) ? <Thumbnail photo={photo} key={photo.id}/> : null}) :
        null
        }
      </div>
    </>
  );
};

export default ReviewBody;