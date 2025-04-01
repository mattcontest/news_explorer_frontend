import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer_text">Developed by Mattia C</p>

      <div className="footer__links">
        <a href="" className="home footer__link">
          Home
        </a>
        <a href="" className="portfolio footer__link">
          Portfolio
        </a>
        <div className="footer__socials">
          <a href="" className="github footer__link">
            GitHub
          </a>
          <a href="" className="linkedin footer__link">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
