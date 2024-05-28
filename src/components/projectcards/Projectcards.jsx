import React, { useState } from "react";
import NavBar from "../navbar/NavBar.jsx";
import DropDown from "./Dropdown.jsx";

const Projectcards = () => {
  const desc = " hi this is flight app ";

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
      <div className="pt-32">
        <DropDown desc={desc} project="YYC Flight Deals" />
        <DropDown desc={desc} project="Mobile App" />
      </div>
    </div>
  );
};

export default Projectcards;
