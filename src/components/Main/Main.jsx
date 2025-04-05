import "./Main.css";
import Preloader from "../Preloader/Preloader";

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
  }
  return <>{content}</>;
}

export default Main;
