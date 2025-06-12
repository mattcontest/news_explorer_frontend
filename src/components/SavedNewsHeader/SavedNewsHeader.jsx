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

  const filteredKeywords = (articles) => {
    // console.log(articles.keyword);
    const keywords = [];
    articles.map((article) => {
      // console.log("Individual article", article);
      if (!keywords.includes(article.keyword)) {
        keywords.push(article.keyword);
      }

      // console.log("Check the keywords", keywords);
    });
    return keywords;
  };
  // console.log("Start here for the keywords", articles);

  // console.log("Check final keywords", filteredKeywords(articles));
  const keywords = filteredKeywords(articles);

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
              By keywords: <b>{keywords[0]}</b>, <b>{keywords[1]}</b>,
              <b> and {keywords.length - 2} other</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SavedNewsHeader;
