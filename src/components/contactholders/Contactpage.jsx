import React, { useState, useEffect } from "react";
import "./Contactholders.css";
import { motion } from "framer-motion";

import Modal from "../modal/Modal";
import NavBar from "../navbar/NavBar";
import ContactLink from "./Contactlink";

const Contactholders = () => {
  const [openModal, setOpenModal] = useState(false);

  function handleModal(trigger) {
    setOpenModal(trigger);
  }

  return (
    <div className="h-screen">
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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ y: 10, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
        >
          <a href="https://www.linkedin.com/in/dillan-ferster" target="blank">
            <ContactLink link="Linkedin" />
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ y: 10, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
        >
          <a href="https://github.com/dillanferster" target="blank">
            <ContactLink link="GitHub" />
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ y: 10, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
        >
          <a href="mailto:dillyferster@gmail.com" target="blank">
            <ContactLink link="Email" />
          </a>
        </motion.div>

        <motion.div
          className="cursor-pointer"
          onClick={() => handleModal(true)}
          initial={{ opacity: 0 }}
          animate={{ y: 10, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.6 }}
        >
          <ContactLink link="Resume" />
        </motion.div>
      </div>
    </div>
  );
};

export default Contactholders;
