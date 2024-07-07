import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import ProjectsPage from "./pages/projects";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import Nav from "./components/nav";

function App() {
  return (
    <BrowserRouter>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/projects" element={<ProjectsPage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
