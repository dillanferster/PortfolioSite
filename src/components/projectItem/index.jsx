import React from "react";
import arrow from "../../assets/arrow2.svg";

function ProjectItem({ project }) {
  return (
    <div className=" px-[3.5rem]  max-w-[80rem] mx-auto  text-[var(--black)] py-10 ">
      <button className="w-full">
        <div className="flex justify-between w-full ">
          <p className="text-[32px]">{project}</p>
          <p className="text-[18px]">
            This is a dive into the site you are currently on
          </p>
          <div>
            <img src={arrow} alt="arrow-projects" />
          </div>
        </div>
      </button>

      <hr className="border-[var(--black)] " />
    </div>
  );
}

export default ProjectItem;
