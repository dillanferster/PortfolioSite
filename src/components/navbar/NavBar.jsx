import Toggler from "../themetoggle/ThemeToggle.jsx";
import { useLocation } from "react-router-dom";

const NavBar = ({ leftArrow, rightArrow, home, bio, projects, contact }) => {
  const location = useLocation();

  return (
    <div className="flex gap-4 justify-center items-center max-sm:gap-2 px-12 max-sm:px-6 max-md:px-10">
      <div className="  flex items-center justify-between pl-8 mt-4 border-2 border-black rounded-full h-16 w-[38rem]  min-w-[10.5rem] max-sm:pl-0  max-sm:justify-center ">
        <div className="font-BebasNeue text-3xl max-sm:text-lg">
          <a href="/home">Dillan Ferster</a>
        </div>
        <div className="pr-8 max-sm:pr-6 max-sm:hidden">
          <Toggler />
        </div>
      </div>
      <div className=" flex items-center justify-center border-2 border-black rounded-full h-16 mt-4 w-[38rem] min-w-[10.5rem]">
        <div className="flex justify-evenly w-[100%] px-1 max-sm:gap-1">
          <a className="max-sm:hidden" href={leftArrow}>
            <div>&#60;</div>
          </a>
          <div className="max-sm:text-xs text-gray-800">
            <a href={home}>{home}</a>
          </div>
          <div
            className={`max-sm:text-xs text-gray-800 ${
              location.pathname === "/bio"
                ? "underline decoration-[var(--color-green)] underline-offset-4"
                : ""
            }`}
          >
            <a href={bio}>{bio}</a>
          </div>
          <div
            className={`max-sm:text-xs text-gray-800 ${
              location.pathname === "/projects"
                ? "underline decoration-[var(--color-green)] underline-offset-4"
                : ""
            }`}
          >
            <a href={projects}>{projects}</a>
          </div>
          <div
            className={`max-sm:text-xs text-gray-800 ${
              location.pathname === "/contact"
                ? "underline decoration-[var(--color-green)] underline-offset-4"
                : ""
            }`}
          >
            <a href={contact}>{contact}</a>
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
