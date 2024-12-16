import React from "react";
import arrow from "../../assets/arrow2.svg";
import FutureTechExpo from "../../assets/FutureTechExpo.png";
import SpringEveningJazz from "../../assets/SpringEveningJazz.png";

const EventArticle = ({ burgerOpen }) => {
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
              src={FutureTechExpo}
              alt="future tech expo event"
              loading="lazy"
              className="w-[35rem] h-auto  shadow-xl shadow-gray-600"
            />

            <h3 className="mt-8 underline-offset-1 underline text-[24px]">
              Future Tech Expo 2025
            </h3>
            <p className="text-[18px] ">
              Instagram story post for the Future Tech Expo 2025 event.
            </p>
          </div>
        </section>
        <section className="pb-[4rem]">
          <div className="p-2 mb-8">
            <img
              src={SpringEveningJazz}
              alt="spring evening jazz event"
              loading="lazy"
              className="w-[35rem] h-auto  shadow-xl shadow-gray-600"
            />

            <h3 className="mt-8 underline-offset-1 underline text-[24px]">
              Spring Evening Jazz
            </h3>
            <p className="text-[18px] ">
              Instagram post for the Spring Evening Jazz event.
            </p>
          </div>
        </section>
      </article>
    </main>
  );
};

export default EventArticle;
