import React from "react";

const ProjectDropDown = ({ project }) => {
  return (
    <div className="flex flex-col justify-center items-center p-2">
      <div className=" w-[100%] max-w-[75rem] flex justify-between items-center  text-[3em] font-Armata  overflow-hidden max-sm:text-[3rem]">
        <div className="flex w-[50rem] gap-16 max-sm:w-[15rem] ">
          <div className="text-2xl flex flex-col justify-center">[00]</div>
          {project}
        </div>
        <div className=" flex  justify-center text-[var(--color-purple)] text-[3rem]">
          <button>+</button>
        </div>
      </div>

      <hr className="w-[100%] max-w-[75rem]  border-black transition-colors mb-8"></hr>
    </div>
  );
};

export default ProjectDropDown;
