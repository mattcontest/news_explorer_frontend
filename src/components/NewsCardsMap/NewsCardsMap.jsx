import "./NewsCardsMap.css";
import NewsCard from "../NewsCard/NewsCard";

function NewsCardsMap({ articles }) {
  return (
    <div className="newscards__map">
      <h2 className="news__cards_title">Search Results</h2>
      <ul className="news__cards_list">
        {articles.slice(0, 6).map((article) => {
          return (
            <NewsCard
              key={article._id}
              imageUrl={article.urlToImage}
              title={article.title}
              description={article.description}
              author={article.author}
              date={new Date(article.publishedAt).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            />
          );
        })}
      </ul>
      <button className="show__more_btn">Show More</button>
    </div>
  );
}

export default NewsCardsMap;
