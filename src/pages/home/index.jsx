import React from "react";
import Introduction from "../../components/introduction";
import Projectbtn from "../../components/projectBtn";
import blocks from "../../assets/blocksp.svg";
import blocks2 from "../../assets/blocksb.svg";
function HomePage() {
  return (
    <main id="home-container" className="flex flex-col   h-full justify-center">
      <div
        id="main-div"
        className="flex flex-col gap-[5rem]  pt-[5rem] px-16 max-w-[100rem]  mx-auto   w-full justify-between  min-h-[30rem] text-[80px] max-2xl:pt-[4rem] max-2xl:gap-[4rem]"
      >
        <div className="flex text-[var(--black)]">
          <div className="flex justify-center items-center border border-[var(--beige)] rounded-full  px-6">
            <h1>Frontend</h1>
          </div>
          &nbsp;
          <div className="flex justify-center items-center pl-4">
            <h1>Developer</h1>
          </div>
        </div>
        <div className="flex justify-end text-[100px] text-[var(--beige)]">
          <h1>&</h1>
        </div>
        <div className="flex items-center">
          <h1 className="text-[var(--black)]">Designer</h1>
          <hr className="border-[var(--black)] w-full ml-[6rem]  translate-y-4" />
        </div>
      </div>
      <div
        id="main-left-side"
        className="flex  justify-between bg-[var(--beige)] w-full border h-[6rem] mt-[5rem] max-2xl:mt-[4rem]"
      >
        <div className="flex max-w-[100rem] mx-auto justify-between w-full px-16 items-center">
          <div>
            <h2 className="italic text-[var(--black)] text-[18px]">
              check out what im working on
            </h2>
          </div>
          <div>
            <button>
              <Projectbtn></Projectbtn>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default HomePage;
