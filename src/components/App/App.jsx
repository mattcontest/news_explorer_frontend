import { useState } from "react";
import "./App.css";
import Header from "../Header/Header.jsx";
import About from "../About/About.jsx";
import Footer from "../Footer/Footer.jsx";
import LoginModal from "../LoginModal/LoginModal.jsx";
import RegisterModal from "../RegisterModal/RegisterModal.jsx";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal.jsx";

function App() {
  // const [count, setCount] = useState(0);
  const [activeModal, setActiveModal] = useState("");

  const handleLoginClick = (e) => {
    e.preventDefault();
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
      <ConfirmationModal
        title={"Registation succesfully completed! "}
        activeModal={activeModal}
        handleCloseModal={closeActiveModal}
        buttonContent={"Sign in"}
        handleSignupClick={handleSignupClick}
      />
    </div>
  );
}

export default App;
