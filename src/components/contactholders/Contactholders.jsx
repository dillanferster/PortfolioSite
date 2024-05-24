import React, { useState, useEffect } from "react";
import "./Contactholders.css";
import Arrow from "../../assets/north-east-arrow.svg";
import Modal from "../modal/Modal";
import NavBar from "../navbar/NavBar";

const Contactholders = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <NavBar
        home="Home"
        bio="Bio"
        projects="Projects"
        contact="Contact"
        leftArrow="/projects"
        rightArrow="/home"
      />
      <div className="flex flex-col  items-center pt-[10rem] gap-10 px-4">
        <div className=" flex flex-col items-center text-[4em] font-Armata ">
          <div className="flex w-[20rem] justify-start">
            Linkedin{" "}
            <div>
              <img src={Arrow} alt="arrow-link" />
            </div>
          </div>
          <hr className="w-[60rem]  border-[var(--color-green)] "></hr>
        </div>
        <div className=" flex flex-col items-center text-[4em] font-Armata ">
          <div className="flex w-[20rem] justify-start">
            Github <div className="text-[var(--color-purple)]"> &#8599;</div>
          </div>
          <hr className="w-[60rem]  border-[var(--color-green)] "></hr>
        </div>
        <div className=" flex flex-col items-center text-[4em] font-Armata ">
          <div className="flex w-[20rem] justify-start">
            Email <div className="text-[var(--color-purple)]"> &#8599;</div>
          </div>
          <hr className="w-[60rem]  border-[var(--color-green)] "></hr>
        </div>
        <div className=" flex flex-col items-center text-[4em] font-Armata ">
          <div className="flex w-[20rem] justify-start">
            Resume <div className="text-[var(--color-purple)]"> &#8599;</div>
          </div>
          <hr className="w-[60rem]  border-[var(--color-green)] "></hr>
        </div>
      </div>
    </div>
  );
};

export default Contactholders;
