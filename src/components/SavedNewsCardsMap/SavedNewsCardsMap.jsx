import SavedNewsCard from "../SavedNewsCard/SavedNewsCard";
import "./SavedNewsCardsMap.css";
import { articlesPreset } from "../../assets/data";
import { v4 as uuidv4 } from "uuid";

function SavedNewsCardsMap({ articles, isLoggedIn, handleDeleteArticle }) {
  console.log(
    "Check here articles that are saved in SavedNewsCardsMap",
    articles
  );

  return (
    <div className="saved__news_cards_map">
      <div className="saved__news_wrapper">
        <ul className="saved__news_list">
          {/* {articles.slice(0, 6).map((article) => { */}
          {/* {articlesPreset.slice(0, 3).map((article) => { */}
          {articles
            .filter((article) => article && article.title && article.date)
            // .slice(0, 6)
            .map((article) => {
              // const uniqueKey = `${article.title}-${article.publishedAt}`;
              const uniqueKey = uuidv4();
              console.log("Inside map saved article", article);
              console.log("Inside map saved article", article.keyword);
              return (
                <SavedNewsCard
                  // key={article._id}
                  key={uniqueKey}
                  keyId={article._id}
                  date={new Date(article.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                  title={article.title}
                  description={article.article}
                  author={article.source}
                  keyword={article.keyword}
                  imageUrl={article.image}
                  text={article.text}
                  isLoggedIn={isLoggedIn}
                  handleDeleteArticle={handleDeleteArticle}
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
