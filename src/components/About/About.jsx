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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            et felis magna. Etiam mattis, velit vel tempor hendrerit, neque dui
            ultricies mi, a ultrices tortor nunc vitae magna. <br />
            <br /> <br />
            Phasellus et felis magna. Etiam mattis, velit vel tempor a ultrices
            tortor nunc vitae magna. Etiam in odio dolor
            <br />
            Etiam dolor dui, commodo a lacus vel, eleifend tempor tortor.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
