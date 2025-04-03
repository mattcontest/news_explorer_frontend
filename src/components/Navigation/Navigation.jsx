import "./Navigation.css";

function Navigation({ handleLoginClick }) {
  return (
    <div className="navigation">
      <div className="navbar">
        <p className="logo">NewsExplorer</p>
        <button className="home_btn">Home</button>
        <button className="signin_btn" onClick={handleLoginClick}>
          Sign in
        </button>
      </div>
    </div>
  );
}

export default Navigation;
