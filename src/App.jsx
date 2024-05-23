import React, { createContext } from "react";
import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Headers from "./components/header/Headers.jsx";
import Bioinfo from "./components/bioinfo/Bioinfo.jsx";
import Project from "./components/projectcards/Projectcards.jsx";
import Contact from "./components/contactholders/Contactholders.jsx";
import "./components/themetoggle/ThemeToggle";

// context api for light/dark theme
export const ThemeContext = createContext();

function App() {
  // state varible for light and dark theme
  const [theme, setTheme] = useState(true);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <BrowserRouter>
        <div className="App" data-theme={theme ? "light" : "dark"}>
          <Routes>
            <Route index element={<Headers />} />
            <Route path="/home" element={<Headers />} />
            <Route path="/bio" element={<Bioinfo />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
