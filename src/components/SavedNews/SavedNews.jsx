import "./SavedNews.css";
import SavedNewsCardMap from "../SavedNewsCardsMap/SavedNewsCardsMap";

function SavedNews({ articles }) {
  return (
    <div className="saved__news">
      <div className="saved__news_wrapper">
        <SavedNewsCardMap articles={articles} />
      </div>
    </div>
  );
}

export default SavedNews;
