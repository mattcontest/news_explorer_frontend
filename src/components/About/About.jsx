import "./about.css";
import avatar from "../../assets/author_bg.jpg";

function About() {
  return (
    <div className="about">
      <div className="about__wrapper">
        <div className="author__image">
          <img src={avatar} alt="Avatar" className="author__image-avatar" />
        </div>
        <div className="author">
          <h1 className="author_title">About the author</h1>
          <p className="author__description">
            This block describes the project author. Here you should indicate
            your <br /> name, what you do, and which development technologies
            you know. <br /> <br />
            You can also talk about your experience with TripleTen, what you
            learned
            <br /> there, and how you can help potential customers.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
