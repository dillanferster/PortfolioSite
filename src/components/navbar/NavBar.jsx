import { useState } from "react";
import Toggler from "../themetoggle/ThemeToggle.jsx";
import { easeInOut, motion } from "framer-motion";

const NavBar = ({ navpage }) => {
  const [openNav, setOpenNav] = useState();

  const navOptions = ["home", "bio", "projects", "contact"];

  return (
    <div className=" sticky top-0 z-[1000] flex gap-4 justify-center items-center max-sm:gap-2 px-12 max-sm:px-6 max-md:px-10 ">
      <div className=" backdrop-blur-md  flex items-center justify-between pl-8 mt-4 border-2 border-[#414558] bg-[var(--color-nav)] rounded-full h-14 w-[66rem]  min-w-[10.5rem] max-sm:pl-0  max-sm:justify-center  shadow-sm ">
        <div className="font-BebasNeue text-3xl max-sm:text-lg text-gray-400 cursor-pointer ">
          <a href="#homeSection">Dillan Ferster</a>
        </div>
        {/* <div className="pr-8 max-sm:pr-6 max-sm:hidden">
          <Toggler />
        </div> */}
      </div>
      <div className="flex flex-col ">
        <div
          className=" backdrop-blur-md cursor-pointer  flex items-center justify-center border-2 border-[var(--color-secondary)]  rounded-full h-14 mt-4 w-[10rem] min-w-[10.5rem] bg-[var(--color-nav)] hover:bg-[var(--color-navHover)]  shadow-sm"
          onClick={() => setOpenNav(!openNav)}
        >
          <div className="flex justify-center items-center text-gray-400  w-[100%] px-8">
            {" "}
            {navpage}
          </div>
        </div>
        {openNav && (
          <motion.div
            className={`absolute z-[-1] translate-y-[3rem] backdrop-blur-md  flex items-center justify-center border-l-2 border-r-2 border-b-2 border-[var(--color-secondary)] rounded-3xl  mt-4 w-[10rem] min-w-[10.5rem] bg-[var(--color-nav)] ${
              openNav ? "h-[10rem]" : "h-0"
            }`}
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 15 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            exit={{ opacity: 0 }}
          >
            <div className="flex justify-center items-center  w-[100%] h-full rounded-3xl px-8 bg-[var(--color-nav)]">
              <ul className=" flex flex-col justify-between pt-8  text-gray-400 ">
                {navOptions.map((item, index) => {
                  if (navpage != item) {
                    return (
                      <a href={`#${item}Section`}>
                        <li
                          className="pt-2 hover:text-gray-200 active:text-gray-500"
                          key={index}
                        >
                          {item}
                        </li>
                      </a>
                    );
                  }
                })}
              </ul>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
