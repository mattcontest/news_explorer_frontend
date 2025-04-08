import "./SavedNewsHeader.css";
import Navigation from "../Navigation/Navigation";

function SavedNewsHeader({ handleLoginClick }) {
  return (
    <div className="saved__news_header">
      <div className="saved__news_header_wrapper">
        <Navigation handleLoginClick={handleLoginClick} />
      </div>
    </div>
  );
}

export default SavedNewsHeader;
