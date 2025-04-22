import "./Navigation.css";
import logout from "../../assets/logout.svg";
import close from "../../assets/close_mobile.svg";
import menu from "../../assets/menu.svg";

import { useLocation, Route, Routes, NavLink } from "react-router-dom";
import { useState } from "react";

function Navigation({ handleLoginClick, isLoggedIn }) {
  const { pathname } = useLocation();
  const [MobileMenuOpen, setMobileMenuOpen] = useState(true);
  return (
    <div className="navigation">
      {MobileMenuOpen && <div className="nav__overlay"></div>}

      <button
        className={`nav_mobile-menu ${pathname === "/saved-news" ? "nav__movile-menu_black" : ""}`}
      >
        <img src={menu} alt="" className="nav__mobile-menu-icon" />
      </button>

      <nav className={`navig__nav ${MobileMenuOpen ? "open" : "closed"}`}>
        {/* <button
          className={`navigation__home-btn ${pathname === "/saved-news" ? "saved__news-home-btn" : ""} ${MobileMenuOpen ? "mobile__open" : ""}`}
        >
          Home
        </button> */}
        <div className="navig_mobile-header">
          <p className="navig__mobile_logo">NewsExplorer</p>

          {/* <button className="close__btn">
            <img src={close} className="close__btn_logo" />
          </button> */}
        </div>
        {/* {!(pathname === "/saved-news") && (
          <button
            className={`navigation__signin-btn ${"nav__mobile-sign_in"} ${MobileMenuOpen ? "mobile__open" : ""}`}
          >
            Sign In
          </button>
        )}

        {isLoggedIn ? (
          <button
            className={`navigation__logout-btn ${"nav__mobile-logout"} ${MobileMenuOpen ? "mobile__open" : ""}`}
          >
            Log Out
          </button>
        ) : (
          <button
            className={`navigation__signin-btn ${"nav__mobile-sign_in"} ${MobileMenuOpen ? "mobile__open" : ""}`}
          >
            Sign In
          </button>
        )} */}
      </nav>

      <div
        className={`navbar ${pathname === "/saved-news" && "navbar__saved_news"}`}
      >
        <NavLink to="/" className="navbar_link">
          <p
            className={`logo ${pathname === "/saved-news" && "logo__saved_news"}`}
          >
            NewsExplorer
          </p>
        </NavLink>

        <NavLink to="/">
          <button
            className={`home_btn ${pathname === "/saved-news" && "home_btn__saved_news"}`}
          >
            Home
          </button>
        </NavLink>
        {isLoggedIn ? (
          <div className="nav_links">
            <NavLink to="/saved-news">
              <button
                // className={`saved__articles_btn ${pathname === "/saved-news" && "home_btn__saved_news"}`}
                className={`saved__articles_btn `}
              >
                Saved articles
              </button>
            </NavLink>

            <NavLink to="/">
              <button className="logout_btn">
                <p className="username">Elise</p>
                <img src={logout} className="logout__img" />
              </button>
            </NavLink>
          </div>
        ) : (
          <button
            className={`signin_btn ${pathname === "/saved-news" && "signin_btn__saved_news"}`}
            onClick={handleLoginClick}
          >
            Sign in
          </button>
        )}
      </div>
    </div>
  );
}

export default Navigation;
