import React from "react";
import arrow2 from "../../assets/arrow2.svg";
import "./styles.css";

function Projectbtn() {
  return (
    <div className="text-[var(--black)] w-[23rem] pb-9 ">
      <a href="/projects">
        <button
          id="projectBtn-box"
          className="w-full text-[32px] flex items-center justify-between cursor-pointer hover:text-[var(--text-hover)] rounded-sm"
        >
          <h2>Projects </h2>
          <div id="projectBtn-arrow-box">
            <img src={arrow2} alt="arrow icon"></img>
          </div>
        </button>
      </a>

      <hr className="border-[var(--black)]" />
      <div>
        <p>Check out what im working on</p>
      </div>
    </div>
  );
}

export default Projectbtn;
