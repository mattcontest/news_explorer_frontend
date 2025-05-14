import "./NewsCardsMap.css";
import NewsCard from "../NewsCard/NewsCard";
import { useState } from "react";

function NewsCardsMap({ articles, isLoggedIn }) {
  const [cardsShown, setCardsShown] = useState(3);
  const showMore = (e) => {
    e.preventDefault();
    setCardsShown(cardsShown + 3);
  };
  return (
    <>
      <div className="news">
        <div className="news__cards">
          <ul className="news__cards-list ">
            <h2 className="news__cards-title">Search Results</h2>
            {articles.slice(0, cardsShown).map((article) => {
              const uniqueKey = `${article.title}-${article.publishedAt}`;
              return (
                <NewsCard
                  // key={article._id}
                  key={uniqueKey}
                  imageUrl={article.urlToImage}
                  title={article.title}
                  description={article.description}
                  author={article.source?.name || "Uknown Source"}
                  date={new Date(article.publishedAt).toLocaleDateString(
                    "en-US",
                    {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    }
                  )}
                  isLoggedIn={isLoggedIn}
                />
              );
            })}
          </ul>
          {cardsShown <= 5 ? (
            <button className="show__more-btn " onClick={showMore}>
              Show More
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}

export default NewsCardsMap;
