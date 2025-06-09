import "./NewsCard.css";
import logo from "../../assets/author_bg.jpg";
import bookmark from "../../assets/bookmark.svg";
import bookmark__default from "../../assets/save_default.svg";
import bookmark__saved from "../../assets/saved__default.svg";

function NewsCard({
  data,
  imageUrl,
  title,
  description,
  date,
  author,
  isLoggedIn,
  handleSaveItem,
  setActiveModal,
  keyId,
}) {
  const handleSaveNewsClick = () => {
    if (!isLoggedIn) {
      console.log("Shouldn't be firing?");
      setActiveModal("login");
      return;
    }
    console.log("Loggin titlle and image from the props", title, imageUrl);
    console.log("Logging data in Newscard.jsx", data);
    console.log("Logging url", data.url);
    console.log("Logging imageUrl", data.urlToImage);
    // console.log("Loggin keyword", data.keyword);

    const refinedArticle = {
      title: title,
      date: data.publishedAt,
      source: data.source?.name,
      link: data.url,
      image: data.urlToImage,
      text: data.description,
    };

    console.log("Artile about to be sent to the backend", refinedArticle);
    handleSaveItem(refinedArticle);
  };

  return (
    <li className="news__card_wrapper">
      {console.log("Visualize data:", keyId)}
      {console.log(isLoggedIn)}
      <div className="card__header">
        <img src={imageUrl} alt="" className="card__image" />
        <button className="save__btn" onClick={handleSaveNewsClick}>
          <img src={bookmark__default} alt="" className="btn__image" />
        </button>
        <div
          className={`card__login-banner  ${isLoggedIn ? "card__login-banner-disabled" : ""}`}
        >
          Sign in to save articles
        </div>
      </div>
      <div className="card__info">
        <div className="card__info_wrapper">
          <p className="card__date">{date}</p>
          <h2 className="card__name">
            {/* {title && title.length > 50
              ? `${title.slice(0, 40)}...`
              : `${title}`} */}
            {title}
          </h2>
          <p className="card__description">
            {/* {description && description.length > 100
              ? `${description.slice(0, 100)}...`
              : description} */}

            {description}
          </p>
          <p className="card__author">{author}</p>
        </div>
      </div>
    </li>
  );
}

export default NewsCard;
