import React, { useState, useEffect } from "react";
import "./Contactholders.css";

import Modal from "../modal/Modal";
import NavBar from "../navbar/NavBar";
import ContactLink from "./contactLink";

const Contactholders = () => {
  const [openModal, setOpenModal] = useState(false);

  function handleModal(trigger) {
    setOpenModal(trigger);
  }

  return (
    <div>
      <Modal open={openModal} handlemodal={handleModal}></Modal>
      <NavBar
        home="Home"
        bio="Bio"
        projects="Projects"
        contact="Contact"
        leftArrow="/projects"
        rightArrow="/home"
      />

      <div className="pt-[10rem]">
        <a href="https://www.linkedin.com/in/dillan-ferster" target="blank">
          <ContactLink link="Linkedin" />
        </a>
        <a href="https://github.com/dillanferster" target="blank">
          <ContactLink link="GitHub" />
        </a>
        <a href="mailto:dillyferster@gmail.com" target="blank">
          <ContactLink link="Email" />
        </a>
        <div className="cursor-pointer" onClick={() => handleModal(true)}>
          <ContactLink link="Resume" />
        </div>
      </div>
    </div>
  );
};

export default Contactholders;
