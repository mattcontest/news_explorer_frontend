import { useState } from "react";
import "./App.css";
import Header from "../Header/Header.jsx";
import About from "../About/About.jsx";
import Footer from "../Footer/Footer.jsx";
import LoginModal from "../LoginModal/LoginModal.jsx";

function App() {
  // const [count, setCount] = useState(0);
  const [activeModal, setActiveModal] = useState("login");

  const handleLoginClick = () => {
    setActiveModal("login");
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
      />
    </div>
  );
}

export default App;
