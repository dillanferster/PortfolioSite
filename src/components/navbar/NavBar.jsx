import Toggler from "../themetoggle/ThemeToggle.jsx";

const NavBar = ({  }) => {
  return (
    <div className=" sticky top-0 z-[1000] flex gap-4 justify-center items-center max-sm:gap-2 px-12 max-sm:px-6 max-md:px-10 ">
      <div className=" backdrop-blur-md  flex items-center justify-between pl-8 mt-4 border-2 border-black rounded-full h-14 w-[66rem]  min-w-[10.5rem] max-sm:pl-0  max-sm:justify-center ">
        <div className="font-BebasNeue text-3xl max-sm:text-lg ">
          <a href="#headerSection">Dillan Ferster</a>
        </div>
        {/* <div className="pr-8 max-sm:pr-6 max-sm:hidden">
          <Toggler />
        </div> */}
      </div>
      <div className=" backdrop-blur-md  flex items-center justify-center border-2 border-black rounded-full h-14 mt-4 w-[10rem] min-w-[10.5rem]">
        <div className="flex justify-center items-center  w-[100%] px-8">
          {" "}
          Home
        </div>
      </div>
    </div>
  );
};

export default NavBar;
