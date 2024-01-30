import React, { createContext } from "react";
import { useState } from "react";
import "./App.css";
import { Bioinfo, Contactholders, Header, Projectcards } from "./components";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import "./components/themetoggle/ThemeToggle";

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState(true);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <BrowserRouter>
        <div className="App" data-theme={theme ? "light" : "dark"}>
          <Header></Header>

          <Bioinfo />

          <Projectcards />

          <Contactholders />
        </div>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
