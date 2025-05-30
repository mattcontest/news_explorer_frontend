import "./NewsCard.css";
import logo from "../../assets/author_bg.jpg";
import bookmark from "../../assets/bookmark.svg";
import bookmark__default from "../../assets/save_default.svg";
import bookmark__saved from "../../assets/saved__default.svg";

function NewsCard({ imageUrl, title, description, date, author, isLoggedIn }) {
  return (
    <li className="news__card_wrapper">
      {console.log(isLoggedIn)}
      <div className="card__header">
        <img src={imageUrl} alt="" className="card__image" />
        <button className="save__btn">
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
