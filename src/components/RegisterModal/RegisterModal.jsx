import "./RegisterModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function RegisterModal({
  title,
  buttonText,
  activeModal,
  isOpen,
  handleCloseModal,
  handleLoginClick,
}) {
  return (
    <ModalWithForm
      title={title}
      buttonText={buttonText}
      activeModal={activeModal}
      isOpen={isOpen}
      handleCloseModal={handleCloseModal}
    >
      <label htmlFor="signin__email" className="signin__email">
        Email{""}
        <input
          type="email"
          className="modal__input"
          id="signin__email"
          placeholder="Enter email"
        />
      </label>
      <label htmlFor="signin__password" className="signin__password">
        Password{""}
        <input
          type="password"
          className="modal__input"
          id="signin__password"
          placeholder="Enter password"
        />
      </label>
      <label htmlFor="signin__username" className="signin__username">
        Username{""}
        <input
          type="text"
          className="modal__input"
          id="signin__username"
          placeholder="Enter your username"
        />
      </label>
      <div className="btn__container">
        <button className="modal__signup_btn">{buttonText}</button>

        <button className="modal__signin_btn " onClick={handleLoginClick}>
          or <a className="modal__signin_txt">Sign In</a>
        </button>
      </div>
    </ModalWithForm>
  );
}

export default RegisterModal;
