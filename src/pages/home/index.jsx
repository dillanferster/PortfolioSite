import React from "react";
import Introduction from "../../components/introduction";
import Projectbtn from "../../components/projectBtn";
import blocks from "../../assets/blocks.svg";

import blocks2 from "../../assets/blocks2.svg";

import gradient1 from "../../assets/gd1.svg";

function HomePage() {
  return (
    <main
      id="home-container"
      className="flex flex-col max-w-[80rem]  mx-auto  h-full justify-center"
    >
      <div
        id="main-div"
        className="flex pt-32 px-16   w-full justify-between  min-h-[30rem] "
      >
        <div id="main-left-side" className="flex flex-col justify-between ">
          <Introduction></Introduction>
          <Projectbtn></Projectbtn>
        </div>
        <div id="main-right-side" className="w-[27rem] ">
          <img className="w-[27rem]" src={blocks2} alt="building blocks"></img>
        </div>
      </div>
      <div className="flex justify-center max-w-[80rem] px-14 pt-[10rem]">
        <img className="w-full" src={gradient1} alt="gradient"></img>
      </div>
    </main>
  );
}

export default HomePage;
