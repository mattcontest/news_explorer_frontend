import ModalTemplate from "../ModalTemplate/ModalTemplate";

function ConfirmationModal({
  title,
  activeModal,
  handleCloseModal,
  buttonContent,
  handleSignupClick,
  isOpen,
}) {
  return (
    <ModalTemplate
      title={title}
      activeModal={activeModal}
      handleCloseModal={handleCloseModal}
      buttonContent={buttonContent}
      handleSignupClick={handleSignupClick}
      isOpen={isOpen}
    />
  );
}

export default ConfirmationModal;
