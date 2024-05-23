import Toggler from "../themetoggle/ThemeToggle.jsx";

const NavBar = ({ pageName, leftArrow, rightArrow }) => {
  return (
    <div className="flex gap-4 justify-center items-center max-sm:gap-2 px-12 max-sm:px-6 max-md:px-10">
      <div className="  flex items-center justify-between pl-8 mt-4 border-2 border-black rounded-full h-16 w-[66rem]  max-sm:pl-6 ">
        <div className="font-BebasNeue text-3xl max-sm:text-2xl">
          <a href="/home">Dillan Ferster</a>
        </div>
        <div className="pr-8 max-sm:pr-6">
          <Toggler />
        </div>
      </div>
      <div className=" flex items-center justify-center border-2 border-black rounded-full h-16 mt-4 w-[10rem] min-w-[6rem]">
        <div className="flex justify-evenly w-[100%] px-1 max-sm:gap-2">
          <a href={leftArrow}>
            <div>&#60;</div>
          </a>
          <div className="underline underline-offset-4 decoration-[var(--color-green)] max-sm:text-sm">
            {pageName}
          </div>
          <a href={rightArrow}>
            <div>&#62;</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
