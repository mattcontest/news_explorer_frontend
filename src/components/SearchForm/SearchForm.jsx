import "./SearchForm.css";

function SearchForm() {
  return (
    <div className="search_form">
      <div className="search_form_wrapper">
        <input
          className="search__form"
          type="text"
          name="search"
          placeholder="Enter topic"
        />
        <button className="search__btn">Search</button>
      </div>
    </div>
  );
}

export default SearchForm;
