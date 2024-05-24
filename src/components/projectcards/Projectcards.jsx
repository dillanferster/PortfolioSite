import React, { useState } from "react";
import NavBar from "../navbar/NavBar.jsx";

const Projectcards = () => {
  return (
    <div>
      <NavBar
        home="Home"
        bio="Bio"
        projects="Projects"
        contact="Contact"
        leftArrow="/bio"
        rightArrow="/contact"
      />
    </div>
  );
};

export default Projectcards;
