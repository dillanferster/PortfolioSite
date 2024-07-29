import React from "react";
import arrow from "../../assets/arrow2.svg";
import "./styles.css";
import { motion } from "framer-motion";

function Contact() {
  const container = {
    show: {
      transition: {
        staggerChildren: 0.18,
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const listItem = {
    hidden: { opacity: 0, y: -5 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <div className="flex justify-center items-center text-[28px] text-[var(--black)] max-sm:text-[18px] ">
      <div>
        <motion.ul
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-8"
        >
          <motion.li variants={listItem}>
            <a
              href="https://www.linkedin.com/in/dillan-ferster

"
              target="blank"
            >
              <button
                id="contactbtn-one"
                className="hover:text-[var(--text-hover)] "
              >
                <div className="flex w-[12rem] justify-between">
                  <p>Linkedin</p>

                  <div id="contact-arrow-one" className="flex items-center">
                    <img
                      src={arrow}
                      className="w-[35px] -rotate-45 max-sm:w-[25px] "
                      alt="arrow"
                    />
                  </div>
                </div>
                <hr className=" border-[var(--black)] w-[12rem]" />
              </button>
            </a>
          </motion.li>

          <motion.li variants={listItem}>
            <a href="https://github.com/dillanferster" target="blank">
              <button
                id="contactbtn-two"
                className="hover:text-[var(--text-hover)] "
              >
                <div className="flex w-[12rem] justify-between">
                  <p>Github</p>

                  <div id="contact-arrow-two" className="flex items-center">
                    <img
                      src={arrow}
                      className="w-[35px] -rotate-45 max-sm:w-[25px] "
                      alt="arrow"
                    />
                  </div>
                </div>
                <hr className=" border-[var(--black)] w-[12rem]" />
              </button>{" "}
            </a>
          </motion.li>
          <motion.li variants={listItem}>
            <a href="mailto:dillyferster@gmail.com" target="blank">
              <button
                id="contactbtn-three"
                className="hover:text-[var(--text-hover)] "
              >
                <div className="flex w-[12rem] justify-between">
                  <p>Email</p>

                  <div id="contact-arrow-three" className="flex items-center">
                    <img
                      src={arrow}
                      className="w-[35px] -rotate-45 max-sm:w-[25px] "
                      alt="arrow"
                    />
                  </div>
                </div>
                <hr className=" border-[var(--black)] w-[12rem]" />
              </button>
            </a>
          </motion.li>
        </motion.ul>
      </div>
    </div>
  );
}

export default Contact;
