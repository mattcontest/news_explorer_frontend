import "./Navigation.css";
import { useLocation, Route, Routes, NavLink } from "react-router-dom";

function Navigation({ handleLoginClick }) {
  const { pathname } = useLocation();
  return (
    <div className="navigation">
      <div
        className={`navbar ${pathname === "/saved-news" && "navbar__saved_news"}`}
      >
        <p
          className={`logo ${pathname === "/saved-news" && "logo__saved_news"}`}
        >
          NewsExplorer
        </p>
        <button
          className={`home_btn ${pathname === "/saved-news" && "home_btn__saved_news"}`}
        >
          Home
        </button>
        <button
          className={`signin_btn ${pathname === "/saved-news" && "signin_btn__saved_news"}`}
          onClick={handleLoginClick}
        >
          Sign in
        </button>
      </div>
    </div>
  );
}

export default Navigation;
