import "./NewsCard.css";
import logo from "../../assets/author_bg.jpg";

function NewsCard() {
  return (
    <li className="news__card_wrapper">
      <div className="card__header">
        <img src={logo} alt="" className="card__image" />
        <button className="save__btn"></button>
      </div>
      <div className="card__info">
        <p className="card__date">Card Date</p>
        <h2 className="card__name">Name Card</h2>
        <p className="card__description">Card Descripion</p>
        <p className="card__author">Author</p>
      </div>
    </li>
  );
}

export default NewsCard;
