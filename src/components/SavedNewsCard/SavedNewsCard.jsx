import "./SavedNewsCard.css";

function SavedNewsCard({
  title,
  date,
  imageUrl,
  description,
  author,
  keyword,
}) {
  return (
    <li className="saved__news_card_wrapper">
      <div className="saved__card_header">
        <img src={imageUrl} alt="" className="card__image" />
        <button className="saved_news_delete_btn">
          <img src="" alt="" className="btn__delete_img" />
        </button>
        {/* <div className="saved__news_keyword">{keyword}</div> */}
        <button className="saved__news_keyword">Parks</button>
      </div>

      <div className="saved__card_info">
        <div className="saved__card_info_wrapper">
          <p className="saved__card_date">{date}</p>
          <h2 className="saved__news_card_name">{title}</h2>
          <p className="saved__news_card_description">{description}</p>
          <p className="saved__card_author">{author}</p>
        </div>
      </div>
    </li>
  );
}

export default SavedNewsCard;
