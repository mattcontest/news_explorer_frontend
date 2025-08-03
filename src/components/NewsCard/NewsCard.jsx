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
  url,
  savedNews,
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

  const isSavedArticle = () => {
    return savedNews?.some((saved) => {
      return saved?.link === url;
    });
  };

  // console.log("url", data.url);

  // savedNews.forEach((news) => {
  //   console.log(news);
  // });

  // const savedData = savedNews?.some((saved) => {
  //   console.log("saved.url", saved?.link, "==", "data.url", data.url);
  //   return saved?.link === data.url;
  // });

  console.log("Look for MATCH:", isSavedArticle());

  return (
    <li className="news__card_wrapper">
      {console.log("Visualize data:", keyId)}
      {console.log(isLoggedIn)}
      <div className="card__header">
        <img src={imageUrl} alt="" className="card__image" />
        <button className="save__btn" onClick={handleSaveNewsClick}>
          {/* Added logic for showing saved bookmark */}
          <img
            src={isSavedArticle() ? bookmark__saved : bookmark__default}
            alt=""
            className="btn__image"
          />
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
          <h2 className="card__name">{title}</h2>
          <p className="card__description">{description}</p>
          <p className="card__author">{author}</p>
        </div>
      </div>
    </li>
  );
}

export default NewsCard;
