import SavedNewsCardsMap from "../SavedNewsCardsMap/SavedNewsCardsMap";
import "./SavedNews.css";

function SavedNews({ articles }) {
  console.log("Check articles", articles);

  return (
    <div className="saved__news">
      <div className="saved__news_wrapper">
        <SavedNewsCardsMap articles={articles} />
      </div>
    </div>
  );
}

export default SavedNews;
