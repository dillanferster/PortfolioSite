import React, { createContext } from "react";
import { useState } from "react";
import "./App.css";
import { Bioinfo, Contactholders, Header, Projectcards } from "./components";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import "./components/themetoggle/ThemeToggle";
import sky from "./assets/sky2.png";

// context api for light/dark theme
export const ThemeContext = createContext();

function App() {
  // state varible for light and dark theme
  const [theme, setTheme] = useState(true);

  // depending on the state varible theme changes the background image
  const bgStyle =
    theme === false
      ? {
          backgroundImage: `url(${sky})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }
      : {
          backgroundImage: `url(${sky})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <BrowserRouter>
        <div
          style={bgStyle}
          className="App"
          data-theme={theme ? "light" : "dark"}
        >
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
