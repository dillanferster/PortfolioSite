import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import ProjectsPage from "./pages/projects";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import Nav from "./components/nav";
import ProjectArticleOne from "./pages/projectArticleOne";
import BurgerNav from "./components/burgerNav";

function App() {
  // burger menu state
  const [burgerOpen, setBurgerOpen] = useState(false);

  // window sizing for burger menu
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const windowSmall = 1000;

  // window handling for hamburger menu
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(window.innerWidth);
    }

    window.addEventListener("resize", handleWindowResize);

    if (windowSize > 1000 && burgerOpen) {
      setBurgerOpen(!burgerOpen);
    }

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [windowSize]);

  return (
    <BrowserRouter>
      {windowSize <= windowSmall ? (
        <BurgerNav
          burgerOpen={burgerOpen}
          setBurgerOpen={setBurgerOpen}
        ></BurgerNav>
      ) : (
        <Nav></Nav>
      )}

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/projects" element={<ProjectsPage />}></Route>
        <Route
          path="/projectArticleOne"
          element={<ProjectArticleOne></ProjectArticleOne>}
        ></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
