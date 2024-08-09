import React from "react";
import { motion } from "framer-motion";

const BurgerMenu = () => {
  const container = {
    hidden: { opacity: 0, y: -20 },
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
    <div className="flex z-[1000] justify-end px-16 pt-4 items-center text-[var(--black)] text-[28px] backdrop-blur-xl absolute  w-screen h-screen max-sm:text-[18px] ">
      <nav className="w-full">
        <motion.ul
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-[2rem]"
        >
          <motion.li className="hover:text-[var(--text-hover)]">
            <a href="/">
              <p className="w-full">Home</p>
            </a>
            <hr className="border border-[var(--beige)]" />
          </motion.li>
          <motion.li className="hover:text-[var(--text-hover)]">
            <a href="/projects">
              <p className="w-full">Projects</p>
            </a>
            <hr className="border border-[var(--beige)]" />
          </motion.li>
          <motion.li className="hover:text-[var(--text-hover)]">
            <a href="/about">
              <p className="w-full">About</p>
            </a>
            <hr className="border border-[var(--beige)]" />
          </motion.li>
          <motion.li className="hover:text-[var(--text-hover)]">
            <a href="/contact">
              <p className="w-full">Contact</p>
            </a>
            <hr className="border border-[var(--beige)]" />
          </motion.li>
        </motion.ul>
      </nav>
    </div>
  );
};

export default BurgerMenu;
