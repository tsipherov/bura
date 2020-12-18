import React from "react";
import "./search-panel.css";

const SearchPanel = () => {
  return (
    <div className="searchPanel w-100">
      <input
        className="form-control search-input"
        type="text"
        placeholder="Enter something"
      />
    </div>
  );
};

export default SearchPanel;
