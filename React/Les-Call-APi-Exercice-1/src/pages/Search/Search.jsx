import React from "react";
import "./Search.scss";

function Search({ setFilter }) {
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setFilter(e.target.value);
    }
  };

  return (
    <div className="Search">
      <label htmlFor="Filter">Search:</label>
      <input
        type="text"
        id="Filter"
        onKeyDown={handleKeyPress} 
      />
    </div>
  );
}

export default Search;
