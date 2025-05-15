import "./NoResult.css";
import noresult from "../../assets/not-found_v1.svg";

function NoResult() {
  return (
    <div className="no__result">
      <img src={noresult} alt="Not Found" className="no__result-img" />
      <h3 className="no__result-title">Nothing Found</h3>
      <p className="no__result-text">
        Sorry, but nothing matched <br /> your search terms.
      </p>
    </div>
  );
}

export default NoResult;
