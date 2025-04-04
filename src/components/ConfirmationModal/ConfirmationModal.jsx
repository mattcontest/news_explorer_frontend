import ModalTemplate from "../ModalTemplate/ModalTemplate";

function ConfirmationModal({
  title,
  activeModal,
  handleCloseModal,
  textContext,
}) {
  return (
    <ModalTemplate
      title={title}
      activeModal={activeModal}
      handleCloseModal={handleCloseModal}
      textContent={textContext}
    />
  );
}

export default ConfirmationModal;
