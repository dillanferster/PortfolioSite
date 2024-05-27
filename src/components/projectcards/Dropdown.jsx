import React, { useState } from "react";
import "./Projectcard.css";

const DropDown = ({ project, desc }) => {
  const [dropDownOpen, setDropDownOpen] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center p-2 ">
      <div
        onClick={() => setDropDownOpen((prev) => !prev)}
        id="projectBox"
        className=" w-[100%] max-w-[75rem] flex justify-between  items-center  text-[3em] font-Armata  overflow-hidden max-sm:text-[3rem] cursor-pointer"
      >
        <div className="flex w-[50rem] gap-16 max-sm:w-[18rem] max-sm:text-lg ">
          <div className="text-2xl flex flex-col justify-center ">[00]</div>
          {project}
        </div>
        {dropDownOpen ? (
          <div className=" flex  justify-center text-[var(--color-purple)] text-[3rem] transition-all">
            <button>-</button>
          </div>
        ) : (
          <div className=" flex  justify-center text-[var(--color-purple)] text-[3rem] transition-all">
            <button>+</button>
          </div>
        )}

        <div className=" w-[100%] max-w-[75rem] absolute translate-y-[2.25rem]  overflow-hidden">
          <hr
            id="projectLineHover"
            className=" border-[var(--color-green)] "
          ></hr>
        </div>
      </div>
      {dropDownOpen ? (
        <hr className="w-[100%] max-w-[75rem]  border-[var(--color-green)]  mb-8"></hr>
      ) : (
        <hr className="w-[100%] max-w-[75rem]  border-black  mb-8"></hr>
      )}

      {dropDownOpen && (
        <div className="flex w-full justify-evenly">
          <div>img</div>
          <div>{desc}</div>
          <div>info</div>
        </div>
      )}
    </div>
  );
};

export default DropDown;
