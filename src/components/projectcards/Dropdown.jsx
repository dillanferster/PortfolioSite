import React, { useState } from "react";
import "./Projectcard.css";
import mainPage from "../../assets/mainpage.png";
import "./Dropdown.css";

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
      <hr
        className={`w-[100%] max-w-[75rem] border-${
          dropDownOpen ? "[var(--color-green)]" : "black"
        } mb-8`}
      />

      {dropDownOpen && (
        <div
          id="drop-down"
          className="flex flex-col w-[90%] justify-between  p-4 flex-wrap pb-16"
        >
          <div className="flex w-[100%] h-[40rem] border-2 border-black rounded-md">
            <img className="w-full" src={mainPage} />
          </div>
          <div className="flex justify-between">
            <div>{desc}</div>

            <div className="font-bold">
              ROLE: <p className="font-normal">Designer & Developer</p>
            </div>
            <div className="font-bold">GITHUB &#8599;</div>
            <div className="font-bold font-BebasNeue text-lg tracking-wider">
              VIEW WEBSITE &#8599;
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropDown;
