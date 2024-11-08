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
import stopScrolling from "../../assets/StopScrolling.png";
import Bones2 from "../../assets/Bones2.png";
import Venom from "../../assets/Venom.png";
import Dust from "../../assets/DUST.png";
import suffocate from "../../assets/suffocate.png";
import sever from "../../assets/sever.png";
import omh from "../../assets/OMH.png";
import comfortzone from "../../assets/comfortzone.png";
import saveme from "../../assets/saveme.png";
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
              src={Dust}
              alt="weapon destruction"
              loading="lazy"
              className="w-[40rem] h-auto translate-x-[2rem] shadow-xl shadow-gray-600"
            />
          </div>
          <div className="p-2 mb-8">
            <img
              src={weaponDestruction}
              alt="weapon destruction"
              loading="lazy"
              className="w-[40rem] h-auto translate-x-[-2rem]  border-[var(--black)] border shadow-xl shadow-gray-600"
            />
          </div>
          <div className="p-2 mb-8">
            <img
              src={euphoria}
              alt="weapon destruction"
              loading="lazy"
              className="w-[40rem] h-auto translate-x-[2rem]  border-[var(--black)] border shadow-xl shadow-gray-600"
            />
          </div>
          <div className="p-2 mb-8">
            <img
              src={stopScrolling}
              alt="weapon destruction"
              loading="lazy"
              className="w-[40rem] h-auto translate-x-[-2rem]  border-[var(--black)] border shadow-xl shadow-gray-600"
            />
          </div>
          <div className="p-2 mb-8">
            <img
              src={Bones2}
              alt="weapon destruction"
              loading="lazy"
              className="w-[40rem] h-auto translate-x-[2rem]  border-[var(--black)] border shadow-xl shadow-gray-600"
            />
          </div>
          <div className="p-2 mb-8">
            <img
              src={Venom}
              alt="weapon destruction"
              loading="lazy"
              className="w-[40rem] h-auto translate-x-[-2rem]  shadow-xl shadow-gray-600"
            />
          </div>
          <div className="p-2 mb-8">
            <img
              src={suffocate}
              alt="weapon destruction"
              loading="lazy"
              className="w-[40rem] h-auto translate-x-[2rem]  border-[var(--black)] border shadow-xl shadow-gray-600"
            />
          </div>
          <div className="p-2 mb-8">
            <img
              src={sever}
              alt="weapon destruction"
              loading="lazy"
              className="w-[40rem] h-auto translate-x-[-2rem]  border-[var(--black)] border shadow-xl shadow-gray-600"
            />
          </div>
          <div className="p-2 mb-8">
            <img
              src={omh}
              alt="weapon destruction"
              loading="lazy"
              className="w-[40rem] h-auto translate-x-[2rem]  border-[var(--black)] border shadow-xl shadow-gray-600"
            />
          </div>
          <div className="p-2 mb-8">
            <img
              src={comfortzone}
              alt="weapon destruction"
              loading="lazy"
              className="w-[40rem] h-auto translate-x-[-2rem]  border-[var(--black)] border shadow-xl shadow-gray-600"
            />
          </div>
          <div className="p-2 mb-8">
            <img
              src={saveme}
              alt="weapon destruction"
              loading="lazy"
              className="w-[40rem] h-auto translate-x-[2rem]  shadow-xl shadow-gray-600"
            />
          </div>
        </section>
      </article>
    </main>
  );
}

export default GraphicArticleOne;
