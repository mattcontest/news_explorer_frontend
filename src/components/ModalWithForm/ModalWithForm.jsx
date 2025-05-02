import "./ModalWithForm.css";
import close_btn from "../../assets/close.svg";
import useModalClose from "../../utils/UseModalClose";

function ModalWithForm({
  children,
  title,
  handleCloseModal,
  isOpen,
  onSubmit,
  activeModal,
}) {
  useModalClose(isOpen, handleCloseModal);
  return (
    <div className={`modal ${isOpen && "modal_open"}`}>
      <div className={`modal__content modal__content_${activeModal}`}>
        <h2 className="modal__title">{title}</h2>
        <button className="modal__close" onClick={handleCloseModal}>
          <img src={close_btn} alt="Close" className="button__close" />
        </button>
        <form className="modal__form" onSubmit={onSubmit}>
          {children}
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
