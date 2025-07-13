import "./RegisterModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useCallback, useState } from "react";

function RegisterModal({
  title,
  buttonText,
  activeModal,
  isOpen,
  handleCloseModal,
  handleLoginClick,
  handleSignUp,
  handleRegistrationSuccess,
}) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [serverError, setServerError] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (!e.target.validity.valid) {
      setEmailError(e.target.validationMessage);
    } else {
      setEmailError("");
    }
  };

  const handleUsernameChange = (e) => {
    setName(e.target.value);
    if (!e.target.validity.valid) {
      setNameError(e.target.validationMessage);
    } else {
      setNameError("");
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (!e.target.validity.valid) {
      setPasswordError(e.target.validationMessage);
    } else {
      setPasswordError("");
    }
  };

  const isValid =
    email !== "" &&
    name !== "" &&
    password !== "" &&
    emailError === "" &&
    nameError === "" &&
    passwordError === "";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password || !name) {
      return;
    }
    if (!isValid) return;

    try {
      await handleSignUp(email, name, password);

      // resetForm();
      handleCloseModal();
      handleRegistrationSuccess();
    } catch (err) {
      console.log("Check err", err);
      setServerError(err.message || "Something went wrong");
    }
    // handleSignUp(email, name, password);
    // handleCloseModal();
    // handleRegistrationSuccess();
  };

  // const resetForm = useCallback(newValues = )

  return (
    <ModalWithForm
      title={title}
      buttonText={buttonText}
      activeModal={activeModal}
      isOpen={isOpen}
      handleCloseModal={handleCloseModal}
      handleSignUp={handleSignUp}
      onSubmit={handleSubmit}
    >
      <label
        htmlFor="signin__email"
        className="signin__email modal__label_signup"
      >
        Email{""}
        <input
          type="email"
          className="modal__input"
          id="signin__email"
          placeholder="Enter email"
          onChange={handleEmailChange}
          value={email}
          required
        />
        {emailError && <span className="modal__error-text">{emailError}</span>}
      </label>
      <label
        htmlFor="signin__password"
        className="signin__password modal__label_signup"
      >
        Password{""}
        <input
          type="password"
          className="modal__input"
          id="signin__password"
          placeholder="Enter password"
          onChange={handlePasswordChange}
          value={password}
          minLength={4}
          required
        />
        {passwordError && (
          <span className="modal__error-text">{passwordError}</span>
        )}
      </label>
      <label
        htmlFor="signin__username"
        className="signin__username modal__label_signup"
      >
        Username{""}
        <input
          type="text"
          className="modal__input"
          id="signin__username"
          placeholder="Enter your username"
          value={name}
          onChange={handleUsernameChange}
          required
          minLength={4}
        />
        {nameError && <span className="modal__error-text">{nameError}</span>}
      </label>
      <div className="btn__container">
        {serverError && (
          <span className="modal__error-text">{serverError}</span>
        )}

        <button className="modal__register_btn" disabled={!isValid}>
          {buttonText}
        </button>

        <button
          className="modal__login_instead_btn "
          onClick={handleLoginClick}
        >
          or <a className="modal__register_txt">Sign In</a>
        </button>
      </div>
    </ModalWithForm>
  );
}

export default RegisterModal;
