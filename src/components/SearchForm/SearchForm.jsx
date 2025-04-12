import { useState } from "react";
import "./SearchForm.css";

function SearchForm({ handleSearchSubmit, keyword, setKeyword }) {
  const [searchItem, setSearchItem] = useState("");

  const handleKeyword = (e) => {
    e.preventDefault();
    setSearchItem(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    handleSearchSubmit(searchItem);
  };

  return (
    <form className="search__form_system" onSubmit={handleSearch}>
      {/* <form className="search__form_system"> */}
      <div className="search_form">
        <div className="search_form_wrapper">
          <input
            className="search__form"
            type="text"
            name="search"
            placeholder="Enter topic"
            onChange={handleKeyword}
            // value={keyword}
          />
          <button className="search__btn" type="submit">
            Search
          </button>
        </div>
      </div>
    </form>
  );
}

export default SearchForm;
