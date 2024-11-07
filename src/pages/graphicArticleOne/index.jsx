import React from "react";
import arrow from "../../assets/arrow2.svg";
import Header from "../../components/header";
import photo1 from "../../assets/photo1.png";
import photo2 from "../../assets/portphoto2.png";
import photo3 from "../../assets/portphoto3.png";
import photo4 from "../../assets/portphoto4.png";
import photo5 from "../../assets/portphoto5.png";
import weaponDestruction from "../../assets/weaponsDestruction.png";
import euphoria from "../../assets/euphoria.png";

const galleryImages = [{ src: photo1, title: "Project Title 1" }];

function GraphicArticleOne({ burgerOpen }) {
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
              src={weaponDestruction}
              alt="weapon destruction"
              loading="lazy"
              className="w-[50rem] h-auto translate-x-[2rem]"
            />
          </div>
          <div className="p-2 mb-8">
            <img
              src={euphoria}
              alt="weapon destruction"
              loading="lazy"
              className="w-[50rem] h-auto translate-x-[-2rem]"
            />
          </div>
        </section>
      </article>
    </main>
  );
}

export default GraphicArticleOne;
