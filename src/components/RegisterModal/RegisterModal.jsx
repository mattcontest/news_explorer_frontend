import "./RegisterModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function RegisterModal({
  title,
  buttonText,
  activeModal,
  isOpen,
  handleCloseModal,
}) {
  return (
    <ModalWithForm
      title={title}
      buttonText={buttonText}
      activeModal={activeModal}
      isOpen={isOpen}
      handleCloseModal={handleCloseModal}
    ></ModalWithForm>
  );
}

export default RegisterModal;
