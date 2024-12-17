import React from "react";
import Header from "../../components/header";

import profilepic from "../../assets/profilePic.png";

function AboutPage({ burgerOpen }) {
  return (
    <main className={` ${burgerOpen ? "h-screen overflow-y-hidden" : ""}  `}>
      <Header title="Get to know me"></Header>
      <div className="flex items-center justify-center gap-16 text-[var(--black)] px-16 max-w-[100rem] mx-auto max-sm:px-8 pb-[2rem] ">
        <article className="flex flex-col gap-8 pt-16 items-center justify-center ">
          <div className="h-auto w-[20rem] border-2 border-[var(--black)] rounded-lg shadow-md max-md:w-[15rem]">
            <img
              className="rounded-md"
              src={profilepic}
              alt="profile pic"
              loading="lazy"
            />
          </div>
          <section>
            <h3 className="font-bold text-[18px]">About me</h3>
            <p className="pb-4">
              Hi, my name is Dillan Ferster, I’m a designer and developer. I
              love to make designs and ART !
            </p>
          </section>{" "}
        </article>
      </div>
    </main>
  );
}

export default AboutPage;
