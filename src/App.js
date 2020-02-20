import React, { useState } from "react";
import "./App.css";
import SearchComponent from "./components/SearchComponet/SearchComponent";
import { search } from "./lib/searchFilterLib";
import DataViewComponent from "./components/Data Viewer/DataViewerComponent";
function App() {
  const [filterList, setFilterList] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const handleSearchInput = ({ target }) => {
    const value = target.value;
    const searchResult = search(value);
    setFilterList(searchResult);
    setSearchInput(value);
  };

  return (
    <main className="center main">
      <SearchComponent onChange={handleSearchInput} />
      {searchInput ? (
        <DataViewComponent list={filterList} />
      ) : (
        <div className="message">Nothing to search...</div>
      )}
    </main>
  );
}

export default App;
