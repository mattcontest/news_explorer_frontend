import "./NoResult.css";
import noresult from "../../assets/not-found_v1.svg";

function NoResult() {
  return (
    <div className="no__result">
      <img src={noresult} alt="Not Found" className="no__result_img" />
      <h1 className="no__result_title">Nothing Found</h1>
      <p className="no__result_text">
        Sorry but nothing matched your search terms.
      </p>
    </div>
  );
}

export default NoResult;
