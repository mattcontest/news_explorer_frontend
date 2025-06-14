import "./SavedNewsCard.css";
import trash from "../../assets/trash.svg";

function SavedNewsCard({
  title,
  date,
  imageUrl,
  description,
  author,
  keyword,
  isLoggedIn,
  text,
  handleDeleteArticle,
  keyId,
}) {
  const handleDeleteNewsClick = () => {
    if (!isLoggedIn) {
      console.log("Cannot delete if not logged in");
      setActiveModal("login");
      return;
    }
    console.log("Check this keyid", keyId);
    handleDeleteArticle(keyId);
  };

  return (
    <li className="saved__news_card_wrapper">
      <div className="saved__card_header">
        <img src={imageUrl} alt="" className="card__image saved__card-image" />
        <button
          className="saved_news_delete_btn"
          onClick={handleDeleteNewsClick}
        >
          <img src={trash} alt="" className="btn__delete_img" />
        </button>

        {/* <div className={`saved__card_remove-banner  ${isLoggedIn ? "saved__card_remove-banner-disabled" : ""} `}>Removed from saved </div> */}
        <div className={`saved__card_remove-banner `}>Remove from saved </div>
        {/* <div className="saved__news_keyword">{keyword}</div> */}
        <button className="saved__news_keyword">{keyword}</button>
      </div>

      <div className="saved__card_info">
        <div className="saved__card_info_wrapper">
          <p className="saved__card_date">{date}</p>
          <h2 className="saved__news_card_name">
            {title && title.length > 50
              ? `${title.slice(0, 58)}...`
              : `${title}`}
          </h2>
          <p className="saved__news_card_description">{text}</p>
          <p className="saved__card_author">{author}</p>
        </div>
      </div>
    </li>
  );
}

export default SavedNewsCard;
