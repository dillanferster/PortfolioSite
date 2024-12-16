import React from "react";
import arrow from "../../assets/arrow2.svg";
import Header from "../../components/header";
import funandproblems from "../../assets/funandproblems.png";
import BadAsIWannaBe from "../../assets/BadAsIWannaBe.png";
import curePoster from "../../assets/curePoster.png";

const GraphicArticleTwo = ({ burgerOpen }) => {
  return (
    <main
      className={` ${
        burgerOpen ? "h-screen overflow-y-hidden" : ""
      }  w-screen flex flex-col  `}
    >
      {/* <Header title="Portfolio Site"></Header> */}

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
              src={BadAsIWannaBe}
              alt="bad as i wanna be poster for skizzy mares"
              loading="lazy"
              className="w-[40rem] h-auto  shadow-xl shadow-gray-600"
            />

            <h3 className="mt-8 underline-offset-1 underline text-[24px]">
              BAD AS I WANNA BE
            </h3>
            <p className="text-[18px] ">
              Skizzy Mars poster for his bad as I wanna be album.
            </p>
          </div>
        </section>
        <section className="pb-[4rem]">
          <div className="p-2 mb-8">
            <img
              src={funandproblems}
              alt="fun and problems poster for skizzy mares"
              loading="lazy"
              className="w-[40rem] h-auto  shadow-xl shadow-gray-600"
            />

            <h3 className="mt-8 underline-offset-1 underline text-[24px]">
              FUN & PROBLEMS
            </h3>
            <p className="text-[18px] ">
              Skizzy Mars poster for his fun and problems album.
            </p>
          </div>
        </section>
        <section className="pb-[4rem]">
          <div className="p-2 mb-8">
            <img
              src={curePoster}
              alt="cure poster"
              loading="lazy"
              className="w-[40rem] h-auto  shadow-xl shadow-gray-600"
            />

            <h3 className="mt-8 underline-offset-1 underline text-[24px]">
              THE CURE
            </h3>
            <p className="text-[18px] ">The Cure poster.</p>
          </div>
        </section>
      </article>
    </main>
  );
};

export default GraphicArticleTwo;
