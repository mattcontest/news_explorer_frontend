import { useState } from "react";
import "./SearchForm.css";

function SearchForm({ handleSearchSubmit, keyword, setKeyword }) {
  const [searchItem, setSearchItem] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleKeyword = (e) => {
    e.preventDefault();
    setSearchItem(e.target.value);
    setInputValue(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    handleSearchSubmit(searchItem);
    setInputValue("");
  };

  return (
    <div className="search">
      <form className="search__form" onSubmit={handleSearch}>
        {/* <form className="search__form_system"> */}
        <div className="search__form-system">
          <div className="search__form-wrapper">
            <input
              className="search__form-input"
              type="text"
              name="search"
              placeholder="Enter topic"
              onChange={handleKeyword}
              value={inputValue}
              required
            />
            <button className="search__form-btn" type="submit">
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SearchForm;
