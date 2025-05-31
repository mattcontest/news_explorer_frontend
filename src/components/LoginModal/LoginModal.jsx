import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./LoginModal.css";

function LoginModal({
  title,
  buttonText,
  activeModal,
  isOpen,
  handleCloseModal,
  handleSignupClick,
  onSubmit,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      return;
    }

    onSubmit({ email, password });
    // handleCloseModal();
  };

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <ModalWithForm
      title={title}
      activeModal={activeModal}
      isOpen={isOpen}
      handleCloseModal={handleCloseModal}
      onSubmit={handleSubmit}
    >
      <label htmlFor="login__email" className="modal__label modal__label_login">
        Email{""}
        <input
          type="email"
          className="modal__input"
          id="login__email"
          placeholder="Enter Email"
          onChange={handleEmailChange}
          value={email}
          required
        />
      </label>
      <label
        htmlFor="login__password"
        className="modal__label modal__label_login"
      >
        Password{""}
        <input
          type="password"
          className="modal__input"
          id="login__password"
          placeholder="Enter Password"
          onChange={handlePasswordChange}
          value={password}
          required
        />
      </label>
      <div className="btn__container">
        <button className="modal__login_btn">{buttonText}</button>

        <button className="modal__signup_btn " onClick={handleSignupClick}>
          or <a className="modal__signup_txt">Sign Up</a>
        </button>
      </div>
    </ModalWithForm>
  );
}

export default LoginModal;
