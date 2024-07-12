import React from "react";
import Introduction from "../../components/introduction";
import Projectbtn from "../../components/projectBtn";
import blocks from "../../assets/blocksp.svg";
import blocks2 from "../../assets/blocksb.svg";
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
        <div id="main-right-side">
          <img className="w-[27rem]" src={blocks2} alt="building blocks"></img>
        </div>
      </div>
    </main>
  );
}

export default HomePage;
