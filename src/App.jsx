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

        <Bioinfo />

        <Projectcards />

        <Contactholders />
      </div>
    </BrowserRouter>
  );
}

export default App;
