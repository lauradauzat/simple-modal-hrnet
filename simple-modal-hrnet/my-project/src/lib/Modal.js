import React from "react";
import "./Modal.css";

const Modal = ({ visible, onClose }) => {
  if (visible === true) {
    return (
      <div className="modal">
        <div className="modal-content">
          <span className="modal-close" onClick={onClose}>
            &times;
          </span>
          <h2>Employee Created</h2>
        </div>
      </div>
    );
  } else {
    return null;
  }


};

export default Modal;
