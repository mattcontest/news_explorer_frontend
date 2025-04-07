import "./NewsCardsMap.css";
import NewsCard from "../NewsCard/NewsCard";

function NewsCardsMap() {
  return (
    <div className="newscards__map">
      <h2 className="news__cards_title">Search Results</h2>
      <ul className="news__cards_list">
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <button className="show__more_btn">Show More</button>
      </ul>
    </div>
  );
}

export default NewsCardsMap;
