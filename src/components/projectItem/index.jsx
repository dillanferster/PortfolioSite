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
        <div className="grid grid-cols-[1fr] ">
          <div className="flex justify-start items-center">
            <p className="text-[28px] max-sm:text-[18px]">{project}</p>
          </div>
          <div className="flex justify-start items-center">
            <p className="text-[18px] max-sm:text-[12px] max-sm:max-w-[13rem] text-wrap text-start">
              {desc}
            </p>
          </div>

          <div className="flex w-full justify-end -translate-y-[2rem]">
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
