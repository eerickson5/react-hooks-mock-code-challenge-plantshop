import React from "react";

function Search({searchString, onSearch}) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={onSearch}
        value={searchString}
      />
    </div>
  );
}

export default Search;
