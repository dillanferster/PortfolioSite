import React from "react";
import arrow from "../../assets/arrow2.svg";
import WeaverLogo2 from "../../assets/WeaverLogo2.png";
import WeaverLogo from "../../assets/WeaverLogo.png";

const LogoArticle = ({ burgerOpen }) => {
  return (
    <main
      className={` ${
        burgerOpen ? "h-screen overflow-y-hidden" : ""
      }  w-screen flex flex-col  `}
    >
      <article className="flex flex-col px-16 max-w-[120rem] mx-auto pb-[4rem] max-md:px-8 text-[var(--black)] ">
        <div className="-translate-x-3 w-full mt-[6rem] pb-[4rem]">
          <a href="/projects">
            <button className="flex border rounded-2xl border-[var(--black)] p-1  justify-evenly w-[7rem] items-center text-[18px] text-[var(--black)] hover:text-[var(--text-hover)]">
              <img
                className="rotate-180 w-[35px] max-sm:w-[25px]"
                src={arrow}
                alt="back-arrow"
              />
              <p>Back</p>
            </button>
          </a>
        </div>
        <section className="pb-[4rem]">
          <div className="p-2 mb-8">
            <img
              src={WeaverLogo}
              alt="weaver logo"
              loading="lazy"
              className="w-[35rem] h-auto  shadow-xl shadow-gray-600"
            />
          </div>
        </section>
        <section className="pb-[4rem]">
          <div className="p-2 mb-8">
            <img
              src={WeaverLogo2}
              alt="Weaver logo kit"
              loading="lazy"
              className="w-[35rem] h-auto  shadow-xl shadow-gray-600"
            />

            <h3 className="mt-8 underline-offset-1 underline text-[24px]">
              Gather Chat
            </h3>
            <p className="text-[18px] ">
              Logo and mini brand kit for Arweave Gather Chat
            </p>
          </div>
        </section>
      </article>
    </main>
  );
};

export default LogoArticle;
