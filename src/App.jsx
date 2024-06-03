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
import { useInView } from "react-intersection-observer";
import Footer from "./components/footer/index.jsx";

// context api for light/dark theme
export const ThemeContext = createContext();

function App() {
  // state varible for light and dark theme
  const [theme, setTheme] = useState(true);

  // page for nav bar
  const [activeSelection, setActiveSelection] = useState();

  const [bioref, inViewBio] = useInView({
    threshold: 0.5,
  });
  const [projectref, inViewProject] = useInView({
    threshold: 0.6,
  });
  const [contactref, inViewContact] = useInView({
    threshold: 0.6,
  });
  const [homeref, inViewHome] = useInView({
    threshold: 0.6,
  });

  useEffect(() => {
    if (inViewBio) {
      setActiveSelection("bio");
    }
    if (inViewProject) {
      setActiveSelection("projects");
    }
    if (inViewContact) {
      setActiveSelection("contact");
    }
    if (inViewHome) {
      setActiveSelection("home");
    }
  }, [inViewBio, inViewContact, inViewProject, inViewHome]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <BrowserRouter>
        <div
          className="App scroll-smooth"
          data-theme={theme ? "light" : "dark"}
        >
          <NavBar navpage={activeSelection}></NavBar>
          <div ref={homeref} id="homeSection">
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
            <Footer></Footer>
          </div>
        </div>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
