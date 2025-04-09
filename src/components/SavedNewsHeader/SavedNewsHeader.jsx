import "./SavedNewsHeader.css";
import Navigation from "../Navigation/Navigation";

function SavedNewsHeader({ handleLoginClick, isLoggedIn }) {
  return (
    <div className="saved__news_header">
      <div className="saved__news_header_wrapper">
        <Navigation
          handleLoginClick={handleLoginClick}
          isLoggedIn={isLoggedIn}
        />
      </div>
    </div>
  );
}

export default SavedNewsHeader;
