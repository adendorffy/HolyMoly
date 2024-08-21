// Modal.js
import React from "react";
import "../Modal.css";

const Modal = ({ isOpen, onClose, number }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Your Random Number</h2>
        <p>{number}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
