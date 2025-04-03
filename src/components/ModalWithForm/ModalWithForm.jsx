import "./ModalWithForm.css";
import close_btn from "../../assets/close.svg";

function ModalWithForm({
  children,
  title,
  handleCloseModal,
  isOpen,
  onSubmit,
}) {
  return (
    <div className="modal modal_open">
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button className="modal__close">
          <img src={close_btn} alt="Close" className="button__close" />
        </button>
        <form className="modal__form">{children}</form>
      </div>
    </div>
  );
}

export default ModalWithForm;
