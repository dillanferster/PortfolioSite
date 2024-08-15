import React from "react";
import arrow from "../../assets/arrow2.svg";
import "./styles.css";

function Projectbtn() {
  return (
    <div>
      <div className="text-[var(--black)] w-[19.75rem] rounded-full border-[var(--black)] border p-2 px-4 bg-[var(--bg)] max-lg:w-[12.25rem] max-sm:w-[8rem]">
        <a href="/projects">
          <button
            id="projectBtn-box"
            className="w-full text-[28px]  flex items-center justify-between cursor-pointer hover:text-[var(--text-hover)] rounded-sm max-lg:text-[22px] max-sm:text-[16px]"
          >
            <span>Projects </span>
            <div id="projectBtn-arrow-box">
              <img
                src={arrow}
                alt="arrow icon"
                className="w-[35px] max-sm:w-[25px] "
              ></img>
            </div>
          </button>
        </a>
      </div>
    </div>
  );
}

export default Projectbtn;
