import "./NoResult.css";
import noresult from "../../assets/not-found_v1.svg";

function NoResult() {
  return (
    <div className=" no-result">
      <img src={noresult} alt="Not Found" className="no-result__img" />
      <h3 className="no-result__title">Nothing Found</h3>
      <p className="no-result__text">
        Sorry, but nothing matched <br /> your search terms.
      </p>
    </div>
  );
}

export default NoResult;
