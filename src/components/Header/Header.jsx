import "./Header.css";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";
import { useContext } from "react";
import CurrentUserContext from "../context/CurrentUserContext";

function Header({
  handleLoginClick,
  handleSearchSubmit,
  keyword,
  setKeyword,
  isLoggedIn,
  handleLogout,
}) {
  const currentUser = useContext(CurrentUserContext);
  return (
    <header className="header">
      <div className="header__wrapper">
        <Navigation
          handleLoginClick={handleLoginClick}
          isLoggedIn={isLoggedIn}
          handleLogout={handleLogout}
        />
        <div className="header__content">
          <div className="header__content-wrapper">
            <h1 className="header__title">What's going on in the world?</h1>
            <p className="header__description">
              Find the latest news on any topic and save them on your personal
              account.
            </p>
          </div>
        </div>

        <SearchForm
          handleSearchSubmit={handleSearchSubmit}
          setKeyword={setKeyword}
          keyword={keyword}
        />
      </div>
    </header>
  );
}

export default Header;
