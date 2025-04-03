import { useState } from "react";
import "./App.css";
import Header from "../Header/Header.jsx";
import About from "../About/About.jsx";
import Footer from "../Footer/Footer.jsx";
import LoginModal from "../LoginModal/LoginModal.jsx";
import RegisterModal from "../RegisterModal/RegisterModal.jsx";

function App() {
  // const [count, setCount] = useState(0);
  const [activeModal, setActiveModal] = useState("login");

  const handleLoginClick = () => {
    setActiveModal("login");
  };

  const handleSignupClick = (e) => {
    e.preventDefault();
    setActiveModal("signup");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  return (
    <div className="page">
      <div className="page__content">
        <div className="page__style">
          <Header handleLoginClick={handleLoginClick} />
          <About />
          <Footer />
        </div>
      </div>
      <LoginModal
        title={"Sign In"}
        buttonText={"Sign in"}
        activeModal={activeModal}
        isOpen={activeModal === "login"}
        handleCloseModal={closeActiveModal}
        handleSignupClick={handleSignupClick}
      />
      <RegisterModal
        title={"Sign Up"}
        buttonText={"Sign Up"}
        activeModal={activeModal}
        isOpen={activeModal === "signup"}
        handleCloseModal={closeActiveModal}
        handleLoginClick={handleLoginClick}
      />
    </div>
  );
}

export default App;
