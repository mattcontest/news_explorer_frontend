import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./LoginModal.css";

function LoginModal({ title, buttonText }) {
  return (
    <ModalWithForm title={title}>
      <label htmlFor="login__email" className="modal__label modal__label_login">
        Email{""}
        <input type="email" className="modal__input" id="login__email" />
      </label>
      <label
        htmlFor="login__password"
        className="modal__label modal__label_login"
      >
        Password{""}
        <input type="password" className="modal__input" id="login__password" />
      </label>
      <div className="btn__container">
        <button className="modal__login_btn">{buttonText}</button>

        <button className="modal__signup_btn ">or Sign Up</button>
      </div>
    </ModalWithForm>
  );
}

export default LoginModal;
