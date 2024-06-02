import React from "react";
import resume from "../../assets/resume.png";

import { useState, useEffect } from "react";

const Modal = ({ open, handlemodal }) => {
  return (
    <div
      className={`${
        open
          ? "visible flex absolute z-[100]  backdrop-blur-sm  h-screen w-screen justify-center  items-start pt-8  px-4"
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
