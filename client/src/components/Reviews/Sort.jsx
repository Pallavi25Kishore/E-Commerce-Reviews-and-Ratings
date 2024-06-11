import React from "react";

const Sort = ({changeSort}) => {

  const handleSortSelect = (e) => {
    e.preventDefault();
    changeSort(e.target.value);
  };

  return (
    <div>
      <label htmlFor="sortOptions">Sorted by  </label>
    <select name="sortOptions" id="sortOptions" onChange={handleSortSelect} defaultValue="relevant">
        <option value="relevant">Relevance</option>
        <option value="newest">Newness</option>
        <option value="helpful">Helpfulness</option>
    </select>
    </div>
  );
};

export default Sort;