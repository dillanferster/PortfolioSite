import React, { useState } from "react";
import "./Projectcard.css";
import flightapp from "../../assets/flightapp.png";

const DropDown = ({ project, desc, tech }) => {
  const [dropDownOpen, setDropDownOpen] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center p-2 max-w-[80rem] mx-auto ">
      <div
        onClick={() => setDropDownOpen(!dropDownOpen)}
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
          className="flex flex-col w-[90%] justify-evenly  p-4  pb-16 "
        >
          <div className="flex h-auto mx-w-full border-2 border-black  rounded-sm">
            <img src={flightapp} alt="flightpic" />
          </div>
          <div className="flex flex-wrap justify-between p-4">
            <div className="max-w-[30rem] mb-4">
              <div className="font-bold">Description:</div>
              <div>{desc}</div>
            </div>
            <div className="mb-4 flex flex-col pr-4">
              <div className="font-bold ">Tech used: </div>
              <div className="flex flex-wrap">{tech}</div>
            </div>
            <div className="flex flex-col border-l border-black w-[12rem]">
              <div className="font-bold  pl-4 pr-4 h-[4rem] ">
                ROLE:{" "}
                <p className="font-normal text-sm">Designer & Developer</p>
              </div>
              <div className="font-bold   pl-4 h-[4rem]">
                <a
                  href="https://yyc-flight-deals.vercel.app/"
                  target="blank"
                  className="hover:underline cursor-pointer"
                >
                  WEBSITE{" "}
                  <span className="text-[var(--color-purple)] ">&#8599;</span>
                </a>
              </div>
              <div className="font-bold pl-4 h-[2rem]">
                <a
                  href="https://github.com/dillanferster/YYCFlightDeals"
                  target="blank"
                  className="hover:underline cursor-pointer"
                >
                  GITHUB{" "}
                  <span className="text-[var(--color-purple)]">&#8599;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropDown;
