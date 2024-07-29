import React from "react";
import arrow from "../../assets/arrow2.svg";
import "./styles.css";

function ProjectItem({ project, desc, id }) {
  return (
    <div className=" px-[3.5rem]  max-w-[80rem] mx-auto  text-[var(--black)] py-10 max-sm:px-[2rem] ">
      <button
        id="project-item-btn"
        className="w-full hover:text-[var(--text-hover)] "
      >
        <div className="flex justify-between w-full">
          <div className="flex flex-col">
            <div className="flex justify-start items-center">
              <p className="text-[28px] max-sm:text-[18px]">{project}</p>
            </div>

            <div className="">
              <p className="text-[18px] max-sm:text-[12px] wrap  text-start">
                {desc}
              </p>
            </div>
          </div>
          <div className="flex justify-end items-center">
            <img
              id="project-item-arrow"
              className="w-[35px] max-sm:w-[25px]"
              src={arrow}
              alt="arrow-projects"
            />
          </div>
        </div>
      </button>

      <hr className="border-[var(--black)] " />
    </div>
  );
}

export default ProjectItem;
