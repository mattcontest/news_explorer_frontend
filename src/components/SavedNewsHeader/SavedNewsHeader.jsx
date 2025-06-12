import "./SavedNewsHeader.css";
import Navigation from "../Navigation/Navigation";
import CurrentUserContext from "../context/CurrentUserContext";
import { useContext } from "react";

function SavedNewsHeader({
  handleLoginClick,
  isLoggedIn,
  handleLogout,
  articles,
}) {
  const currentUser = useContext(CurrentUserContext);
  console.log(
    "Check currentUser in SavedNewsHeader",
    currentUser.currentUser.name
  );
  console.log(
    "Check currentUser in SavedNewsHeader",
    currentUser.currentUser.email
  );

  return (
    <div className="saved__news_header">
      <div className="saved__news_header_wrapper">
        <Navigation
          handleLoginClick={handleLoginClick}
          isLoggedIn={isLoggedIn}
          handleLogout={handleLogout}
        />
        <div className="saved__news_header_content">
          <div className="internal__saved_header_wrapper">
            <h5 className="saved__news__header_title">Saved Articles</h5>
            <h1 className="saved__news_header_description">
              {currentUser.currentUser.name}, you have {articles.length} saved
              articles
            </h1>
            <p className="saved__news_header_keywords">
              By keywords: <b>Nature</b>, <b>Yellowstone</b>,<b> and 2 other</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SavedNewsHeader;
