import "./Main.css";
import Preloader from "../Preloader/Preloader";
import NoResult from "../NoResult/NoResult";

function Main({ isLoading }) {
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
  } else {
    content = (
      <div className="main__no-result">
        <NoResult />
      </div>
    );
  }
  return <>{content}</>;
}

export default Main;
