import React, { createContext, useEffect, useRef } from "react";
import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Headers.jsx";
import Bioinfo from "./components/bioinfo/Bioinfo.jsx";
import Project from "./components/projectcards/Projectcards.jsx";
import Contact from "./components/contactholders/Contactpage.jsx";
import "./components/themetoggle/ThemeToggle";
import { NavBar } from "./components/index.js";
import { useInView } from "framer-motion";

// context api for light/dark theme
export const ThemeContext = createContext();

function App() {
  // state varible for light and dark theme
  const [theme, setTheme] = useState(true);

  // ref to bio page
  const bioref = useRef(null);
  // framer motin in view to see if ref in in screen view
  const isInView = useInView(bioref);

  useEffect(() => {
    console.log(isInView);
  }),
    [isInView];

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <BrowserRouter>
        <NavBar></NavBar>
        <div className="App" data-theme={theme ? "light" : "dark"}>
          <div id="headerSection">
            <Header></Header>
          </div>

          <div ref={bioref} id="bioSection">
            <Bioinfo></Bioinfo>
          </div>
          <div ref={projectref} id="projectsSection">
            <Project></Project>
          </div>
          <div ref={contactref} id="contactSection">
            <Contact></Contact>
          </div>
        </div>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
