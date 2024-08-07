import React, { useState } from "react";
import { motion } from "framer-motion";

function Nav() {
  const container = {
    show: {
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const listItem = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,

      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <div className="sticky top  z-[1000] ">
      <nav
        id="nav"
        className="flex justify-between pb-4 px-16 pt-4 align-middle text-[var(--black)] max-w-[100rem] mx-auto text-[18px] "
      >
        <div id="nav-title">
          <a href="/">Dillan Ferster</a>
        </div>

        <motion.ul
          variants={container}
          initial="hidden"
          animate="show"
          id="nav-items"
          className="flex justify-evenly align-middle gap-8 text-[var(--black)] "
        >
          <motion.li variants={listItem}>
            <a className="hover:text-[var(--text-hover)]" href="/">
              Home
            </a>
          </motion.li>
          <motion.li variants={listItem}>
            <a className="hover:text-[var(--text-hover)]" href="/projects">
              Projects
            </a>
          </motion.li>
          <motion.li variants={listItem}>
            <a className="hover:text-[var(--text-hover)]" href="/about">
              About
            </a>
          </motion.li>
          <motion.li variants={listItem}>
            <a className="hover:text-[var(--text-hover)]" href="/contact">
              Contact
            </a>
          </motion.li>
        </motion.ul>
      </nav>
      <hr className="border-[var(--black)]" />
    </div>
  );
}

export default Nav;
