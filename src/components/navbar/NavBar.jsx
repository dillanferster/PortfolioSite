import { useState } from "react";
import Toggler from "../themetoggle/ThemeToggle.jsx";
import { easeInOut, motion } from "framer-motion";

const NavBar = ({ navpage }) => {
  const [openNav, setOpenNav] = useState();

 

  const navOptions = ["Home", "Bio", "Projects", "Contact"];

  return (
    <div className=" sticky top-0 z-[1000] flex gap-4 justify-center items-center max-sm:gap-2 px-12 max-sm:px-6 max-md:px-10">
      <div className=" backdrop-blur-md  flex items-center justify-between pl-8 mt-4 border-2 border-black rounded-full h-14 w-[66rem]  min-w-[10.5rem] max-sm:pl-0  max-sm:justify-center ">
        <div className="font-BebasNeue text-3xl max-sm:text-lg ">
          <a href="#headerSection">Dillan Ferster</a>
        </div>
        {/* <div className="pr-8 max-sm:pr-6 max-sm:hidden">
          <Toggler />
        </div> */}
      </div>
      <div className="flex flex-col ">
        <div
          className=" backdrop-blur-md  flex items-center justify-center border-2 border-black rounded-full h-14 mt-4 w-[10rem] min-w-[10.5rem]"
          onClick={() => setOpenNav(!openNav)}
        >
          <div className="flex justify-center items-center  w-[100%] px-8">
            {" "}
            {navpage}
          </div>
        </div>
        {openNav && (
          <motion.div
            className={`absolute z-[-1] translate-y-[3rem] backdrop-blur-md  flex items-center justify-center border-l-2 border-r-2 border-b-2 border-black rounded-3xl  mt-4 w-[10rem] min-w-[10.5rem] ${
              openNav ? "h-[10rem]" : "h-0"
            }`}
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 15 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            exit={{ opacity: 0 }}
          >
            <div className="flex justify-center items-center  w-[100%] px-8">
              <ul className=" flex flex-col justify-evenly pt-6">
                {navOptions.map((item, index) => {
                  if (openNav !== item) {
                    return <li key={index}>{item}</li>;
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
