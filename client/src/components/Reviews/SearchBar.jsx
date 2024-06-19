import React, {useState} from 'react';


const SearchBar = ({handleSearchBarChange}) => {

  const [searchTerm, setSearchTerm] = useState('');

  const handleOnChange = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
    handleSearchBarChange(e.target.value);
  };


  return (
  <div className="search-bar">
  <input className="search-bar-input" type="text" name="search-bar" id="search-bar" value={searchTerm} placeholder="Search🔍" onChange={handleOnChange}></input>
  </div>
  );
};

export default SearchBar;
