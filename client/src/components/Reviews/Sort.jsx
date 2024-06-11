import React from "react";

const Sort = ({changeSort}) => {

  const handleSortSelect = (e) => {
    e.preventDefault();
    changeSort(e.target.value);
  };

  return (
    <div>
      <label htmlFor="sortOptions">Sort on: </label>
    <select name="sortOptions" id="sortOptions" onChange={handleSortSelect} defaultValue="relevant">
        <option value="relevant">MOST RELEVANT</option>
        <option value="newest">MOST RECENT </option>
        <option value="helpful">MOST HELPFUL</option>
    </select>
    </div>
  );
};

export default Sort;