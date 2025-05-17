import "./NoResult.css";
import noresult from "../../assets/not-found_v1.svg";

function NoResult() {
  return (
    <div className=" main__no-result">
      <img src={noresult} alt="Not Found" className="main__no-result-img" />
      <h3 className="main__no-result-title">Nothing Found</h3>
      <p className="main__no-result-text">
        Sorry, but nothing matched <br /> your search terms.
      </p>
    </div>
  );
}

export default NoResult;
