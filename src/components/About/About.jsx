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
            At the intersection of education and technology, I’ve developed the
            ability to clearly explain software concepts, thanks to my
            experience as a Graduate Teaching Assistant in Computer Science at
            Northeastern University. I completed both General Assembly’s
            Software Engineering Immersive and TripleTen’s Web Development
            program, spending over 700 hours building full-stack web apps.
            Through these, I worked with JavaScript, HTML, CSS, React, Node.js,
            Express.js, and MongoDB, while also gaining hands-on experience with
            API integration, responsive UI design, and deploying projects to
            production. I’m passionate about creating intuitive, user-centered
            web applications, and I’m excited to bring my skills and continuous
            learning mindset to my first role as a frontend engineer.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
