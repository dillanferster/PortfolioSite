import Toggler from "../themetoggle/ThemeToggle.jsx";

import { NavLink } from "react-router-dom";

const NavBar = ({ leftArrow, rightArrow, home, bio, projects, contact }) => {
  return (
    <div className="flex gap-4 justify-center items-center max-sm:gap-2 px-12 max-sm:px-6 max-md:px-10">
      <div className="  flex items-center justify-between pl-8 mt-4 border-2 border-black rounded-full h-16 w-[38rem]  min-w-[10.5rem] max-sm:pl-0  max-sm:justify-center ">
        <div className="font-BebasNeue text-3xl max-sm:text-lg ">
          <a href="/home">Dillan Ferster</a>
        </div>
        {/* <div className="pr-8 max-sm:pr-6 max-sm:hidden">
          <Toggler />
        </div> */}
      </div>
      <div className=" flex items-center justify-center border-2 border-black rounded-full h-16 mt-4 w-[38rem] min-w-[10.5rem]">
        <div className="flex justify-evenly w-[100%] px-1 max-sm:gap-1">
          <a className="max-sm:hidden" href={leftArrow}>
            <div>&#60;</div>
          </a>
          <div className="max-sm:text-xs text-gray-800">
            <NavLink to={`/${home}`}> {home}</NavLink>
          </div>
          <div className="max-sm:text-xs text-gray-800 ">
            <NavLink
              to={`/${bio}`}
              className={({ isActive }) =>
                isActive
                  ? "underline underline-offset-4 decoration-[var(--color-green)]"
                  : ""
              }
            >
              {" "}
              {bio}
            </NavLink>
          </div>
          <div className="max-sm:text-xs text-gray-800 ">
            <NavLink
              to={`/${projects}`}
              className={({ isActive }) =>
                isActive
                  ? "underline underline-offset-4 decoration-[var(--color-green)]"
                  : ""
              }
            >
              
              {projects}
            </NavLink>
          </div>
          <div className="max-sm:text-xs text-gray-800 ">
            <NavLink
              to={`/${contact}`}
              className={({ isActive }) =>
                isActive
                  ? "underline underline-offset-4 decoration-[var(--color-green)]"
                  : ""
              }
            >
              {" "}
              {contact}
            </NavLink>
          </div>

          <a className="max-sm:hidden text-gray-800" href={rightArrow}>
            <div>&#62;</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
