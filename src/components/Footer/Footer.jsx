import "./Footer.css";

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
        <div className="footer__socials">
          <a href="" className="github footer__link">
            GitHub
          </a>
          {/* <a href="" className="linkedin footer__link">
            LinkedIn
          </a> */}
          <a href="" className="tripleten footer__link">
            TripleTen
          </a>
        </div>
      </div>
      <p className="footer_text">© 2025 Supersite, Powered by News API</p>
    </footer>
  );
}

export default Footer;
