import React, { useState, useEffect } from "react";
import "./Contactholders.css";
import { animate, motion } from "framer-motion";

import Modal from "../modal/Modal";

import ContactLink from "./ContactBox";

const Contactholders = () => {
  const [openModal, setOpenModal] = useState(false);

  function handleModal(trigger) {
    setOpenModal(trigger);
  }

  const fadeInVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      y: 10,
      opacity: 1,
    },
  };

  return (
    <div className="pb-[10rem] pt-[3rem] ">
      <Modal open={openModal} handlemodal={handleModal}></Modal>
      <div className="pt-[10rem] max-sm:pt-[8rem]">
        <motion.div
          variants={fadeInVariants}
          initial="initial"
          whileInView="animate"
          transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
        >
          <a href="https://www.linkedin.com/in/dillan-ferster" target="blank">
            <ContactLink link="Linkedin" />
          </a>
        </motion.div>
        <motion.div
          variants={fadeInVariants}
          initial="initial"
          whileInView="animate"
          transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
        >
          <a href="https://github.com/dillanferster" target="blank">
            <ContactLink link="GitHub" />
          </a>
        </motion.div>
        <motion.div
          variants={fadeInVariants}
          initial="initial"
          whileInView="animate"
          transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
        >
          <a href="mailto:dillyferster@gmail.com" target="blank">
            <ContactLink link="Email" />
          </a>
        </motion.div>

        <motion.div
          className="cursor-pointer"
          onClick={() => handleModal(true)}
          variants={fadeInVariants}
          initial="initial"
          whileInView="animate"
          transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
        >
          <ContactLink link="Resume" />
        </motion.div>
      </div>
    </div>
  );
};

export default Contactholders;
