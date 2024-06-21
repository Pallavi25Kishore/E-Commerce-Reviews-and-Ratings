import React from 'react';

const StyleSelector = ({ styles, selectedStyleId, onSelectStyle }) => {
  // Split styles into rows of 3
  const rows = [];
  for (let i = 0; i < styles.length; i += 4) {
    rows.push(styles.slice(i, i + 4));
  }

  return (
    <div className="style-selector">
      {rows.map((row, rowIndex) => (
        <div className="thumbnail-row" key={rowIndex} role="row">
          {row.map((style) => (
            <div
              key={style.style_id}
              className={`style-thumbnail ${style.style_id === selectedStyleId ? 'selected' : ''}`}
              onClick={() => onSelectStyle(style)}
              style={{ backgroundImage: `url(${style.photos[0].thumbnail_url})` }}
              data-testid={`style-thumbnail-${style.style_id}-${rowIndex}`}
            >
              {style.style_id === selectedStyleId}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default StyleSelector;
