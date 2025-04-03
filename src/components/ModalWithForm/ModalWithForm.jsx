import "./ModalWithForm.css";

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
        <button className="modal__close"></button>
        <form className="modal__form">{children}</form>
      </div>
    </div>
  );
}

export default ModalWithForm;
