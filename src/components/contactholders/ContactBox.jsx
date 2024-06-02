import React from "react";
import { motion } from "framer-motion";
import arrow from "../../assets/arrow.png";

const ContactLink = ({ link }) => {
  return (
    <div className="flex flex-col  items-center  px-4">
      <div
        id="linkedinBox"
        className=" w-[80%] max-w-[45rem] flex flex-col items-center  text-[4rem] font-Armata  overflow-hidden max-sm:text-[3rem]"
      >
        <motion.div
          className="flex w-[22rem] justify-start max-sm:w-[16rem] 
        "
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          {link}
          <div className=" flex flex-col justify-center">
            <img
              className="w-[3rem] max-sm:w-[2.5rem]"
              src={arrow}
              alt="arrow"
            ></img>
          </div>
        </motion.div>

        <div className=" w-[80%] max-w-[45rem] absolute translate-y-[6rem] overflow-hidden max-sm:hidden">
          <hr
            id="linkedinLineHover"
            className=" border-[var(--color-green)] "
          ></hr>
        </div>
      </div>

      <hr
        id="linkedinLine"
        className="w-[80%] max-w-[45rem]  border-gray-700 transition-colors mb-8 "
      ></hr>
    </div>
  );
};

export default ContactLink;