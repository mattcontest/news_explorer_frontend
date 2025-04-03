import "./Header.css";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";

function Header({ handleLoginClick }) {
  return (
    <div className="header">
      <div className="header_wrapper">
        <Navigation handleLoginClick={handleLoginClick} />
        <div className="header__content">
          <div className="internal__header__wrapper">
            <h1 className="header__title">What's going on in the world?</h1>
            <p className="header__description">
              Find the latest news on any topic and save them on your personal
              account.
            </p>
          </div>
        </div>

        <SearchForm />
      </div>
    </div>
  );
}

export default Header;
