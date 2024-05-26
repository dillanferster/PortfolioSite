import React, { useState } from "react";
import NavBar from "../navbar/NavBar.jsx";
import ProjectDropDown from "./Projectdropdown.jsx";

const Projectcards = () => {
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
        <ProjectDropDown project="YYC Flight Deals" />
      </div>
    </div>
  );
};

export default Projectcards;
