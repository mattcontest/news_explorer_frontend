import ModalTemplate from "../ModalTemplate/ModalTemplate";

function ConfirmationModal({
  title,
  activeModal,
  handleCloseModal,
  buttonContent,
}) {
  return (
    <ModalTemplate
      title={title}
      activeModal={activeModal}
      handleCloseModal={handleCloseModal}
      buttonContent={buttonContent}
    />
  );
}

export default ConfirmationModal;
