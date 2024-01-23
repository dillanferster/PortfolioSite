import React from "react";
import resume from "../../assets/resume.png";
import "./Modal.css";
import { useRef, useEffect } from "react";

const Modal = ({ open, onClose }) => {
  
  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  if (!open) {
    return null;
  }

  return (
    <div className="overlay" onClick={onClose}>
      <div className="modalContainer">
        <div className="close-btn-container">
          <button className="closebtn" onClick={onClose}>
            X
          </button>
        </div>
        <img
          onClick={stopPropagation}
          className="resume-img"
          src={resume}
          alt="resume"
        />
      </div>
    </div>
  );
};

export default Modal;
