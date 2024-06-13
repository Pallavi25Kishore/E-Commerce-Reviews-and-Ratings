import React from "react";

const Sort = ({changeSort}) => {

  const handleSortSelect = (e) => {
    e.preventDefault();
    changeSort(e.target.value);
  };

  return (
    <div data-testid="sort-options-selector">
      <label htmlFor="sortOptions">Sorted by  </label>
    <select name="sortOptions" id="sortOptions" onChange={handleSortSelect} defaultValue="relevant" data-testid="select">
        <option value="relevant">Relevance</option>
        <option value="newest">Newness</option>
        <option value="helpful">Helpfulness</option>
    </select>
    <br></br>
    <br></br>
    </div>
  );
};

export default Sort;