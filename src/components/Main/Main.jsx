import "./Main.css";
import Preloader from "../Preloader/Preloader";
import NoResult from "../NoResult/NoResult";
import NewsCardsMap from "../NewsCardsMap/NewsCardsMap";

function Main({
  isLoading,
  articles,
  noResults,
  isLoggedIn,
  handleSaveItem,
  setActiveModal,
  savedNews,
  handleDeleteItem,
}) {
  let content = null;

  if (isLoading) {
    content = (
      <div className="main">
        <div className="main__preloader">
          <div className="main__preloader-circle">
            <Preloader />
          </div>
          <p className="main__preloader-text">Searching for news...</p>
        </div>
      </div>
    );
  } else if (noResults) {
    content = (
      <div className="main">
        <NoResult />
      </div>
    );
  } else if (!noResults) {
    {
      articles.length > 0 &&
        (content = (
          <div className="main">
            <NewsCardsMap
              articles={articles}
              isLoggedIn={isLoggedIn}
              handleSaveItem={handleSaveItem}
              setActiveModal={setActiveModal}
              savedNews={savedNews}
              handleDeleteItem={handleDeleteItem}
            />
          </div>
        ));
    }
  }
  return <>{content}</>;
}

export default Main;
