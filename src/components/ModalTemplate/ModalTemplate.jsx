import "./ModalTemplate.css";
import close_btn from "../../assets/close.svg";

function ModalTemplate({ title, handleCloseModal, activeModal, textContent }) {
  return (
    <div
      className={`modal__template ${activeModal === "confirm" && "modal_open"} `}
    >
      <div
        className={`modal__template_content modal__template_content_${activeModal}`}
      >
        <h2 className="modal__template_title">{title}</h2>
        <button className="modal__close" onClick={handleCloseModal}>
          <img src={close_btn} alt="Close" className="button__close" />
        </button>
        <p className="modal__text">{textContent}</p>
      </div>
    </div>
  );
}

export default ModalTemplate;
