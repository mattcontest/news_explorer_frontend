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
      <div className="newscards__map">
        <h2 className="news__cards_title">Search Results</h2>
        <ul className="news__cards_list">
          {articles.slice(0, cardsShown).map((article) => {
            return (
              <NewsCard
                key={article._id}
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
        {cardsShown <= 18 ? (
          <button className="show__more_btn" onClick={showMore}>
            Show More
          </button>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default NewsCardsMap;
