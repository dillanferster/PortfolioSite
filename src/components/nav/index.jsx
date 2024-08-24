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
    <div className="  fixed top-0 w-screen  z-[999]  bg-transparent border-b-[1px] border-[var(--black)]">
      <nav
        id="nav"
        className="flex h-[4rem] justify-between pb-4 px-16 pt-4 align-middle text-[var(--black)]  text-[18px] max-w-[100rem] mx-auto"
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
    </div>
  );
}

export default Nav;
