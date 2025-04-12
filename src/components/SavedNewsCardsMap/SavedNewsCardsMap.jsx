import SavedNewsCard from "../SavedNewsCard/SavedNewsCard";
import "./SavedNewsCardsMap.css";

function SavedNewsCardsMap({ articles }) {
  return (
    <div className="saved__news_cards_map">
      <div className="saved__news_wrapper">
        <ul className="saved__news_list">
          {articles.slice(0, 6).map((article) => {
            return (
              <SavedNewsCard
                date={new Date(article.publishedAt).toLocaleDateString(
                  "en-US",
                  {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  }
                )}
                title={article.title}
                description={article.description}
                author={article.author}
                keyword={article.keyword}
                imageUrl={article.urlToImage}
              />
            );
          })}
        </ul>
        {/* <button className="saved__show_more_btn">Show More</button> */}
      </div>
    </div>
  );
}

export default SavedNewsCardsMap;
