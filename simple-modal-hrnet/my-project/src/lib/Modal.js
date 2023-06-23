import React from "react";
import "./Modal.css";


const Modal = () => {

  function closeModal() {
    document.querySelector(".modal").classList.add("hidden");
  }
  
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="modal-close" onClick={closeModal}>
          &times;
        </span>
        <h2>Employee Created</h2>
      </div>
    </div>
  );
};



export default Modal;
