import React, { useState, useEffect } from 'react';

const StyleSelector = ({ styles, onSelectStyle }) => {
  const [selectedStyle, setSelectedStyle] = useState(styles.find(style => style.default) || styles[0]);

  useEffect(() => {
    onSelectStyle(selectedStyle);
  }, [selectedStyle, onSelectStyle]);

  return (
    <div>
      <h3>{selectedStyle.name}</h3>
      <div className="style-thumbnails">
        {styles.map((style) => (
          <div
            key={style.style_id}
            className={`thumbnail ${style.style_id === selectedStyle.style_id ? 'selected' : ''}`}
            onClick={() => setSelectedStyle(style)}
            data-testid="style-thumbnail"
          >
            {style.style_id === selectedStyle.style_id && <span className="checkmark">X</span>}
            <img src={style.photos[0].thumbnail_url} alt={style.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StyleSelector;
