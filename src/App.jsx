import React from "react";
import { useState } from "react";
import "./App.css";
import { Bioinfo, Contactholders, Header, Projectcards } from "./components";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import "./components/themetoggle/ThemeToggle";

function App() {
  return (
    <BrowserRouter>
      <div className="App" data-theme={"light"}>
        <Header></Header>

        <div className="bio-page-main">
          <Bioinfo />
        </div>

        <div className="projects-page-main">
          <Projectcards />
        </div>

        <div className="contact-page-main">
          <Contactholders />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
