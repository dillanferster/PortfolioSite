import React from "react";
import arrow from "../../assets/arrow2.svg";
import "./styles.css";

function ProjectItem({ project }) {
  return (
    <div className=" px-[3.5rem]  max-w-[100rem] mx-auto  text-[var(--black)] py-10 ">
      <a href="/projectinfo">
        <button id="project-item-btn" className="w-full">
          <div className="grid grid-cols-3">
            <div className="flex justify-start">
              <p className="text-[28px]">{project}</p>
            </div>
            <div className="flex justify-center">
              <p className="text-[18px]">
                This is a dive into the site you are currently on
              </p>
            </div>

            <div className="flex w-full justify-end">
              <img id="project-item-arrow" src={arrow} alt="arrow-projects" />
            </div>
          </div>
        </button>
      </a>

      <hr className="border-[var(--black)] " />
    </div>
  );
}

export default ProjectItem;
