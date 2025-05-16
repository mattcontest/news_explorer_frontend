import "./Navigation.css";
import logout from "../../assets/logout__white.svg";
import logout__black from "../../assets/logout.svg";
import close from "../../assets/close_mobile.svg";
import menu from "../../assets/menu.svg";
import saved_menu from "../../assets/saved_menu.svg";

import { useLocation, Route, Routes, NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import CurrentUserContext from "../context/CurrentUserContext";

function Navigation({ handleLoginClick, isLoggedIn, handleLogout }) {
  const { pathname } = useLocation();
  const [MobileMenuOpen, setMobileMenuOpen] = useState(false);
  const handleLogoutClick = () => {
    handleLogout();
    setMobileMenuOpen(false);
  };
  // const [toggleActive, setToggleActive] = useState(false);

  const toggleMobile = () => {
    setMobileMenuOpen((value) => !value);
  };

  const currentUser = useContext(CurrentUserContext);
  console.log("Check currentUser", currentUser.currentUser.name);

  return (
    <div className="navigation">
      {MobileMenuOpen && <div className="nav__overlay"></div>}

      <button
        className={`navigation__mobile-menu ${pathname === "/saved-news" ? "nav__movile-menu_black" : ""} ${MobileMenuOpen ? "nav_mobile-menu-close" : ""}`}
        onClick={toggleMobile}
      >
        <img
          // src={` ${pathname === "/saved-news" ? saved_menu : menu} ${MobileMenuOpen ? close : menu}`}
          src={` ${MobileMenuOpen ? close : pathname === "/saved-news" ? saved_menu : menu}`}
          alt=""
          className="mobile-menu_icon"
        />
      </button>

      <nav className={`navigation__nav ${MobileMenuOpen ? "open" : "closed"}`}>
        {/* <button
          className={`navigation__home-btn ${pathname === "/saved-news" ? "saved__news-home-btn" : ""} ${MobileMenuOpen ? "mobile__open" : ""}`}
        >
          Home
        </button> */}
        <div className="navigation__mobile-header">
          <p
            className={`navig__mobile-logo ${pathname === "/saved-news" ? "navig__mobile_logo_saved" : " "}`}
          >
            NewsExplorer
          </p>

          {/* <button className="close__btn">
            <img src={close} className="close__btn_logo" />
          </button> */}
        </div>

        <div className="menu">
          <div
            className={`menu__options ${MobileMenuOpen ? "show_options" : ""}`}
          >
            <div
              className={` navigation__mobile_open-header  ${MobileMenuOpen ? "open" : ""}`}
            >
              <p
                className={`navigation__mobile_logo-open ${MobileMenuOpen ? "open" : "closed"}`}
              >
                NewsExplorer
              </p>
            </div>
            <div className="menu__options-bar">
              <NavLink to="/">
                <button
                  // className={`navigation__home-mobile ${MobileMenuOpen ? "mobile__open" : "mobile__close"}`}
                  className={`navigation__home-mobile ${MobileMenuOpen ? "mobile__open" : "mobile__close"}`}
                >
                  Home
                </button>
              </NavLink>
              {!(pathname === "/saved-news") && isLoggedIn && (
                <NavLink to="/saved-news">
                  <button
                    className={`navigation__home-mobile navigation__home-mobile-saved  ${MobileMenuOpen ? "mobile__open" : "mobile__close"}`}
                  >
                    Saved Article
                  </button>
                </NavLink>
              )}

              {!(pathname === "/saved-news") && !isLoggedIn && (
                <button
                  className={`navigation__signin-btn nav__mobile-sign_in ${MobileMenuOpen ? "mobile__open" : "mobile__close"}`}
                  onClick={handleLoginClick}
                >
                  Sign In
                </button>
              )}
              {pathname === "/saved-news" && (
                <button
                  className={`navigation__saved-articles ${MobileMenuOpen ? "mobile__open" : "mobile__close"}`}
                >
                  Saved Articles
                </button>
              )}

              {isLoggedIn ? (
                <button
                  className={`navigation__logout-btn ${"nav__mobile-logout"} ${MobileMenuOpen ? "mobile__open" : "mobile__close"}`}
                  onClick={handleLogoutClick}
                >
                  {/* onClick={handleLogout} */}
                  Log Out
                </button>
              ) : (
                <></>

                // <button
                //   className={`navigation__signin-btn ${"nav__mobile-sign_in"} ${MobileMenuOpen ? "mobile__open" : "mobile__close"}`}
                // >
                //   Sign In
                // </button>
              )}
            </div>
          </div>
        </div>
      </nav>

      <div
        className={`navbar ${pathname === "/saved-news" && "navbar__saved_news"}`}
      >
        <NavLink to="/" className="navbar__link">
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
        {/* {isLoggedIn? ( */}
        {pathname === "/saved-news" ? (
          <div className="nav__links">
            <NavLink to="/saved-news">
              <button
                // className={`saved__articles_btn ${pathname === "/saved-news" && "home_btn__saved_news"}`}
                className={`saved__articles_btn `}
              >
                Saved articles
              </button>
            </NavLink>

            <NavLink to="/">
              <button
                className="nav__links-logout logout__btn"
                onClick={handleLogout}
              >
                <p className="username">
                  {currentUser?.currentUser.name || "Elise"}
                </p>
                <img src={logout__black} className="nav__links-img" />
              </button>
            </NavLink>
          </div>
        ) : (
          <>
            {isLoggedIn ? (
              <>
                <NavLink to="/saved-news">
                  <button
                    className={`saved__articles-btn ${pathname === "/saved-news" && "signin_btn__saved_news"}`}
                    // onClick={handleLoginClick}
                  >
                    Saved Articicles
                  </button>
                </NavLink>
                <button
                  className="nav__links-logout nav__links-logout nav__links-home "
                  onClick={handleLogout}
                >
                  <p className="username">
                    {currentUser?.currentUser.name || "Elise"}
                  </p>
                  <img
                    src={pathname === "/saved-news" ? logout__black : logout}
                    className="nav__links-img"
                  />
                </button>
              </>
            ) : (
              <button
                className={`signin_btn ${pathname === "/saved-news" && "signin_btn__saved_news"}`}
                onClick={handleLoginClick}
              >
                Sign in
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Navigation;
