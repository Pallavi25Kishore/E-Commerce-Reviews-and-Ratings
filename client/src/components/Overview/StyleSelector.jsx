import React from 'react';

const StyleSelector = ({ styles, onSelectStyle }) => {
  return (
    <div className="style-selector">
      <h3>Select Style</h3>
      <div className="thumbnails">
        {styles.map((style) => (
          <div
            key={style.style_id}
            className={`thumbnail ${style['default?'] ? 'selected' : ''}`}
            onClick={() => onSelectStyle(style)}
            style={{ backgroundImage: `url(${style.photos[0].thumbnail_url})` }}
          >
            {style['default?'] && <span className="checkmark">✔</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StyleSelector;
