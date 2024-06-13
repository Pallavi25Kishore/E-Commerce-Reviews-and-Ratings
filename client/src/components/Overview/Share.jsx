import React from 'react';

const Share = () => (
  <div>
    <button onClick={() => window.open('https://facebook.com')}>Share on Facebook</button>
    <button onClick={() => window.open('https://twitter.com')}>Share on Twitter</button>
    <button onClick={() => window.open('https://pinterest.com')}>Share on Pinterest</button>
  </div>
);

export default Share;