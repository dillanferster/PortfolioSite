import React from "react";

import Projectbtn from "../../components/projectBtn";

function HomePage() {
  return (
    <main
      id="home-container"
      className="flex flex-col   h-full justify-center pt-[4rem]"
    >
      <header>
        {" "}
        <div
          id="main-div"
          className="flex flex-col gap-[5rem] pt-[4rem] px-16 max-w-[100rem]  mx-auto   w-full justify-between  min-h-[30rem] text-[80px] max-2xl:pt-[4rem] max-2xl:gap-[4rem] max-lg:text-[50px] max-sm:text-[27px]  max-sm:px-8 max-sm:gap-[3rem]   max-sm:min-h-[20rem]"
        >
          <div className="flex  text-[var(--black)]">
            <div className="flex justify-start items-center border border-[var(--beige)] rounded-full  px-6 max-md:px-2">
              <h1>Software</h1>
            </div>
            &nbsp;
            <div className="flex justify-center items-center pl-4 max-sm:pl-0">
              <h1>Developer</h1>
            </div>
            <div className="w-full pl-8 flex items-center  max-sm:pl-2">
              {" "}
              <hr className="border-[var(--black)] w-full  translate-y-4 max-lg:translate-y-2 max-sm:translate-y-1" />
            </div>
          </div>
          <div className="flex justify-start text-[100px] text-[var(--black)] max-lg:text-[65px] max-sm:text-[30px]">
            <h1>&</h1>
          </div>
          <div className="flex items-center">
            <hr className="border-[var(--black)] w-full mr-4 translate-y-4 max-lg:translate-y-2 max-sm:translate-y-0  max-sm:mr-2" />
            <h1 className="text-[var(--black)]">Designer</h1>
          </div>
        </div>
      </header>

      <section>
        {" "}
        <div
          id="main-left-side"
          className="flex  justify-between bg-[var(--beige)] w-full border h-[6rem] mt-[5rem] max-2xl:mt-[4rem] max-md:h-[5rem]"
        >
          <div className="flex max-w-[100rem] mx-auto justify-between w-full px-16 items-center max-sm:px-8 ">
            <div>
              <h2 className="italic text-[var(--black)] text-[18px]  max-lg:text-[16px] max-sm:text-[12px]">
                check out what i'm working on
              </h2>
            </div>
            <div>
              <div>
                <Projectbtn></Projectbtn>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
