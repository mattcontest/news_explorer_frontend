import "./NewsCard.css";
import logo from "../../assets/author_bg.jpg";
import bookmark from "../../assets/bookmark.svg";

function NewsCard() {
  return (
    <li className="news__card_wrapper">
      <div className="card__header">
        <img src={logo} alt="" className="card__image" />
        <button className="save__btn">
          <img src={bookmark} alt="" className="btn__image" />
        </button>
      </div>
      <div className="card__info">
        <div className="card__info_wrapper">
          <p className="card__date">November 4, 2020</p>
          <h2 className="card__name">
            Everyone Needs a Special 'Sit Spot' in Nature
          </h2>
          <p className="card__description">
            Ever since I read Richard Louv's influential book, "Last Child in
            the Woods," the idea of having a special "sit spot" has stuck with
            me. This advice, which Louv attributes to nature educator Jon Young,
            is for both adults and children to find...
          </p>
          <p className="card__author">treehugger</p>
        </div>
      </div>
    </li>
  );
}

export default NewsCard;
