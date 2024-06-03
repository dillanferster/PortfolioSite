import React, { useState } from "react";
import NavBar from "../navbar/NavBar.jsx";
import DropDown from "./Dropdown.jsx";
import { AnimatePresence, motion } from "framer-motion";

const Projectcards = () => {
  const descYycFlights =
    "Web application that displays flight prices and locations for popular direct flights out of Calgary, it uses three separate API's flights data, city data, and images. All of the data and images are live, they will all automatically update with new destinations. When the select option from the flight details card is chosen it will re-direct to purchase the ticket. ";
  const techYycFlights = [
    " React.js, Next.js, Tailwind",
    <br />,
    "Github, Vercel, fetchAPI",
  ];

  return (
    <div className="pt-[10rem] pb-[5rem] max-sm:pt-[5rem]">
      <AnimatePresence mode="popLayout">
        {" "}
        <motion.div className="pt-32 px-2 h-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ y: 10, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
            layout
          >
            <DropDown
              desc={descYycFlights}
              tech={techYycFlights}
              project="YYC Flight Deals"
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Projectcards;
