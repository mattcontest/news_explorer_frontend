import "./Header.css";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";

function Header() {
  return (
    <div className="header">
      <div className="header_wrapper">
        <Navigation />
        <SearchForm />
      </div>
    </div>
  );
}

export default Header;
