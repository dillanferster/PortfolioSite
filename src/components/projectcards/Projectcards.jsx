import React, { useState } from "react";
import NavBar from "../navbar/NavBar.jsx";
import DropDown from "./Dropdown.jsx";

const Projectcards = () => {
  const descYycFlights =
    "Web application that displays flight prices and locations for popular direct flights out of Calgary, it uses three separate API's flights data, city data, and images. All of the data and images are live, they will all automatically update with new destinations. When the select option from the flight details card is chosen it will re-direct to purchase the ticket. ";
  const techYycFlights = [
    " React.js, Next.js, Tailwind",
    <br />,
    "Github, Vercel, fetchAPI",
  ];

  return (
    <div className="h-screen ">
      <NavBar
        home="Home"
        bio="Bio"
        projects="Projects"
        contact="Contact"
        leftArrow="/bio"
        rightArrow="/contact"
      />
      <div className="pt-32 px-2">
        <DropDown
          desc={descYycFlights}
          tech={techYycFlights}
          project="YYC Flight Deals"
        />
      </div>
    </div>
  );
};

export default Projectcards;
