import "./Main.css";
import Preloader from "../Preloader/Preloader";
import NoResult from "../NoResult/NoResult";
import NewsCardsMap from "../NewsCardsMap/NewsCardsMap";

function Main({ isLoading, articles }) {
  let content = null;

  if (isLoading) {
    content = (
      <div className="main__preloader">
        <div className="main__preloader_circle">
          <Preloader />
        </div>
        <p className="main__preloader_text">Searching for news...</p>
      </div>
    );
  } else if (1 > 4) {
    content = (
      <div className="main__no-result">
        <NoResult />
      </div>
    );
  } else if (2 > 0) {
    content = (
      <div className="main__content">
        <NewsCardsMap articles={articles} />
      </div>
    );
  }
  return <>{content}</>;
}

export default Main;
