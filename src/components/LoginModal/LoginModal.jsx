import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./LoginModal.css";

function LoginModal({
  title,
  buttonText,
  activeModal,
  isOpen,
  handleCloseModal,
  handleSignupClick,
}) {
  return (
    <ModalWithForm
      title={title}
      activeModal={activeModal}
      isOpen={isOpen}
      handleCloseModal={handleCloseModal}
    >
      <label htmlFor="login__email" className="modal__label modal__label_login">
        Email{""}
        <input
          type="email"
          className="modal__input"
          id="login__email"
          placeholder="Enter Email"
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
