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
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      return;
    }
    setServerError("");
    if (!isValid) return;

    try {
      await onSubmit({ email, password });
    } catch (err) {
      console.log("Check err, from LoginModal", err.message);
      setServerError(
        // err.message || "Something went wrong while logging you in"
        err.message
      );
    }

    // onSubmit({ email, password });
    // handleCloseModal();
  };

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [serverError, setServerError] = useState("");

  const handleEmailChange = (e) => {
    setServerError("");
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setServerError("");
    setPassword(e.target.value);
  };

  const isValid =
    email !== "" &&
    password !== "" &&
    emailError === "" &&
    passwordError === "" &&
    serverError === "";

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
        {emailError && <span className="modal__error-text">{emailError}</span>}
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
        {passwordError && (
          <span className="modal__error-text">{passwordError}</span>
        )}
      </label>
      <div className="btn__container">
        {serverError && (
          <span className="modal__error-text-bg">{serverError}</span>
        )}
        <button className="modal__login_btn">{buttonText}</button>

        <button className="modal__signup_btn " onClick={handleSignupClick}>
          or <a className="modal__signup_txt">Sign Up</a>
        </button>
      </div>
    </ModalWithForm>
  );
}

export default LoginModal;
