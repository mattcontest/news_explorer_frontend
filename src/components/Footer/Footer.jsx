import "./Footer.css";
import github from "../../assets/github.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__links">
        <a href="" className="home footer__link">
          Home
        </a>
        {/* <a href="" className="portfolio footer__link">
          Portfolio
          </a> */}
        <a href="" className="tripleten footer__link">
          TripleTen
        </a>
        <div className="footer__socials">
          <a
            href="https://github.com/mattcontest"
            className="github footer__link"
          >
            {/* GitHub */}
            <img src={github} alt="" className="github__logo" />
          </a>
        </div>
      </div>
      <p className="footer_text">© 2025 Supersite, Powered by News API</p>
    </footer>
  );
}

export default Footer;
