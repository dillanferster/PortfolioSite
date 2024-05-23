import React, { useState } from "react";
import NavBar from "../navbar/NavBar.jsx";

const Projectcards = () => {
  return (
    <div>
      <NavBar pageName="Projects" leftArrow="/bio" rightArrow="/contact" />
    </div>
  );
};

export default Projectcards;
