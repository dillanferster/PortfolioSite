import React from "react";
import resume from "../../assets/resume.png";

import { useState, useEffect } from "react";

const Modal = ({ open, handlemodal }) => {
  return (
    <div
      className={`${
        open
          ? "visible flex fixed z-[1000]  backdrop-blur-sm  h-full w-full transition-colors  transition-all justify-center items-center  px-4"
          : "hidden"
      }`}
      onClick={() => handlemodal(false)}
    >
      <div
        className="w-[38rem] transition-all  rounded-sm"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-end ">
          <p
            className="flex justify-end cursor-pointer w-4"
            onClick={() => handlemodal(false)}
          >
            X
          </p>
        </div>

        <img src={resume} alt="resume" />
      </div>
    </div>
  );
};

export default Modal;
