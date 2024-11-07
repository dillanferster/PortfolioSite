import React from "react";
import arrow from "../../assets/arrow2.svg";
import "./styles.css";

function ProjectItem({ project, desc, tag }) {
  return (
    <div className=" px-[3rem]  max-w-[80rem] mx-auto  text-[var(--black)] py-6 max-sm:px-[1rem] border rounded-2xl shadow-md border-[var(--black)] mb-[1.5rem] ">
      <button
        id="project-item-btn"
        className="w-full hover:text-[var(--text-hover)] "
      >
        <div className="flex justify-between w-full">
          <div className="flex flex-col">
            <div className="flex justify-start items-center ">
              <p className="text-[28px] font-bold max-sm:text-[18px]">
                {project}
              </p>
            </div>

            <div className="">
              <div className="w-[5.5rem]   text-[var(--beige)] rounded-md mr-2  mb-1 max-sm:text-[12px] max-sm:w-[4rem]">
                {tag}
              </div>
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
    </div>
  );
}

export default ProjectItem;
