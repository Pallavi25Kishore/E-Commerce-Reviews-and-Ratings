import React from 'react';

const Share = () => (
  <div>
    <input className="share-logo" type="image" src="/client/src/assets/facebook.jpg" onClick={() => window.open('https://facebook.com')}/>
    <input className="share-logo" type="image" src="/client/src/assets/twitter.jpg" onClick={() => window.open('https://twitter.com')}/>
    <input className="share-logo" type="image" src="/client/src/assets/pintrest.png" onClick={() => window.open('https://pintrest.com')}/>
  </div>
);

export default Share;