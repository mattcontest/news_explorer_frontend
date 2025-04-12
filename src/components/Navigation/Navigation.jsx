import "./Navigation.css";
import { useLocation, Route, Routes, NavLink } from "react-router-dom";

function Navigation({ handleLoginClick, isLoggedIn }) {
  const { pathname } = useLocation();
  return (
    <div className="navigation">
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
        <button
          className={`home_btn ${pathname === "/saved-news" && "home_btn__saved_news"}`}
        >
          Home
        </button>
        {isLoggedIn ? (
          <div className="nav_links">
            <button
              // className={`saved__articles_btn ${pathname === "/saved-news" && "home_btn__saved_news"}`}
              className={`saved__articles_btn `}
            >
              Saved articles
            </button>

            <button className="logout_btn">Log Out</button>
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
