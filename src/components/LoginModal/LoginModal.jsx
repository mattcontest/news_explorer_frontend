import ModalWithForm from "../ModalWithForm/ModalWithForm";
function LoginModal() {
  return (
    <ModalWithForm>
      <label htmlFor="login__email" className="modal__label modal__label_login">
        <input type="email" className="modal__input" id="login__email" />
      </label>
    </ModalWithForm>
  );
}

export default LoginModal;
