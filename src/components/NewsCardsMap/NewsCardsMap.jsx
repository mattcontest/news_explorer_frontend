import "./NewsCardsMap.css";
import NewsCard from "../NewsCard/NewsCard";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function NewsCardsMap({
  articles,
  isLoggedIn,
  handleSaveItem,
  setActiveModal,
}) {
  const [cardsShown, setCardsShown] = useState(3);
  const showMore = (e) => {
    e.preventDefault();
    setCardsShown(cardsShown + 3);
  };
  return (
    <>
      <section className="news">
        <div className="news__cards">
          <div className="news__cards-wrapper">
            <h2 className="news__cards-title">Search Results</h2>
            <ul className="news__cards-list ">
              {articles.slice(0, cardsShown).map((article) => {
                const uniqueKey = uuidv4();
                return (
                  <NewsCard
                    key={uniqueKey}
                    data={article}
                    keyId={uniqueKey}
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
                    handleSaveItem={handleSaveItem}
                    setActiveModal={setActiveModal}
                  />
                );
              })}
            </ul>
          </div>
          {cardsShown <= 5 ? (
            <button className="show__more-btn " onClick={showMore}>
              Show More
            </button>
          ) : (
            ""
          )}
        </div>
      </section>
    </>
  );
}

export default NewsCardsMap;
