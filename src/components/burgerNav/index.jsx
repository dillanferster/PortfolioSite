import React, { useState } from "react";
import BurgerMenu from "../burgerMenu";
import { motion } from "framer-motion";

const BurgerNav = ({ burgerOpen, setBurgerOpen }) => {
  return (
    <div>
      {burgerOpen ? <BurgerMenu burgerOpen={burgerOpen}></BurgerMenu> : null}

      <div className=" fixed top-0 w-screen  z-[1000]  bg-transparent border-b-[1px] border-[var(--black)]">
        <nav
          id="nav"
          className="flex h-[4rem] justify-between pb-4 px-16 pt-4 align-middle text-[var(--black)] max-w-[100rem] mx-auto text-[18px] max-sm:text-[16px] max-sm:px-8"
        >
          <div id="nav-title">
            <a href="/">Dillan Ferster</a>
          </div>
          <div className="flex justify-center items-center">
            <motion.button
              className={
                burgerOpen
                  ? null
                  : "flex flex-col items-center justify-center gap-1"
              }
              onClick={() => setBurgerOpen(!burgerOpen)}
              animate={burgerOpen ? "open" : "closed"}
            >
              <motion.div
                variants={{
                  open: { rotate: "45deg", translateY: 1 },
                  closed: { rotate: "0deg" },
                }}
                transition={{ duration: 0.2 }}
                className="w-8 h-[2px] bg-[var(--black)]"
              ></motion.div>
              <motion.div
                variants={{
                  open: { rotate: "-45deg", translateY: -1 },
                  closed: { rotate: "0deg" },
                }}
                transition={{ duration: 0.2 }}
                className="w-8 h-[2px] bg-[var(--black)]"
              ></motion.div>
              <motion.div
                variants={{
                  open: { rotate: "45deg", translateY: -3 },
                  closed: { rotate: "0deg" },
                }}
                transition={{ duration: 0.2 }}
                className="w-8 h-[2px] bg-[var(--black)]"
              ></motion.div>
            </motion.button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default BurgerNav;
