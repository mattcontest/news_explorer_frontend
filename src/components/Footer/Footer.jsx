import "./Footer.css";
import github from "../../assets/github.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__mobile footer__mobile-open">
        <div className="footer__links">
          <div className="footer__links-first">
            <a href="" className="home footer__link">
              Home
            </a>

            <a
              href="https://github.com/mattcontest"
              className="github footer__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} alt="" className="github__logo" />
            </a>
          </div>

          <div className="footer__links-second">
            {/* <a
              href="https://tripleten.com/"
              className="tripleten footer__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              TripleTen
            </a> */}
          </div>

          {/* <div className="footer__socials">
          <a
            href="https://github.com/mattcontest"
            className="github footer__link"
            target="_blank"
            rel="noopener noreferrer"
          >

            <img src={github} alt="" className="github__logo" />
          </a>



        </div> */}
        </div>
      </div>

      <div className="footer__non-mobile desktop-open">
        <div className="footer__non-mobile-links">
          <div className="footer__non-mobile-first">
            <a href="" className=" footer__link">
              Home
            </a>
            {/* <a href="" className=" footer__link">
              TripleTen
            </a> */}

            <a
              href="https://github.com/mattcontest"
              className=""
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} alt="" className="github__logo" />
            </a>
          </div>
        </div>
      </div>

      <p className="footer_text">© 2025 AtlaNews by MattCo</p>
    </footer>
  );
}

export default Footer;
