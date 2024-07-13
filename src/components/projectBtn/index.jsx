import React from "react";
import arrow from "../../assets/arrow2.svg";
import "./styles.css";

function Projectbtn() {
  return (
    <div className="text-[var(--black)] w-[23rem] rounded-full border-[var(--black)] border p-2 px-4 bg-[var(--bg)]">
      <a href="/projects">
        <button
          id="projectBtn-box"
          className="w-full text-[28px] flex items-center justify-between cursor-pointer hover:text-[var(--text-hover)] rounded-sm"
        >
          <h2>Projects </h2>
          <div id="projectBtn-arrow-box">
            <img src={arrow} alt="arrow icon"></img>
          </div>
        </button>
      </a>

      {/* <hr className="border-[var(--purple)] border-2" /> */}
    </div>
  );
}

export default Projectbtn;
