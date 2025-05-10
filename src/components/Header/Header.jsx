import "./Header.css";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";
import { useContext } from "react";
import CurrentUserContext from "../context/CurrentUserContext";
// import { Routes, Route, Link, useLocation, NavLink } from "react-router-dom";

function Header({
  handleLoginClick,
  handleSearchSubmit,
  keyword,
  setKeyword,
  isLoggedIn,
  handleLogout,
}) {
  // const { pathname } = useLocation();
  const currentUser = useContext(CurrentUserContext);
  return (
    <div className="header">
      <div className="header__wrapper">
        <Navigation
          handleLoginClick={handleLoginClick}
          isLoggedIn={isLoggedIn}
          handleLogout={handleLogout}
        />
        <div className="header__content">
          <div className="internal__header__wrapper">
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
    </div>
  );
}

export default Header;
