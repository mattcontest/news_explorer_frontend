import ModalTemplate from "../ModalTemplate/ModalTemplate";

function ConfirmationModal({
  title,
  activeModal,
  handleCloseModal,
  buttonContent,
  handleSignupClick,
}) {
  return (
    <ModalTemplate
      title={title}
      activeModal={activeModal}
      handleCloseModal={handleCloseModal}
      buttonContent={buttonContent}
      handleSignupClick={handleSignupClick}
    />
  );
}

export default ConfirmationModal;
