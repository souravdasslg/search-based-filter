import React from "react";
import "./SearchBar.css";
const SearchComponent = props => {
  return (
    <div>
      <input
        className="search_input"
        placeholder="Type your keyword here"
        aria-label="Input label to search"
        onChange={props.onChange.bind(this)}
      />
    </div>
  );
};
export default SearchComponent;
