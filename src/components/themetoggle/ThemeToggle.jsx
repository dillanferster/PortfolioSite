import "./ThemeToggle.css";
import React, { useContext } from "react";
import sunmoon from "../../assets/sun-moon.svg";
import { ThemeContext } from "../../App";

const Toggler = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const setDarkMode = () => {
    setTheme(false);
  };

  const setLightMode = () => {
    setTheme(true);
  };

  const toggleTheme = (e) => {
    if (e.target.checked) {
      setDarkMode();
    } else setLightMode();
  };

  return (
    <div className="toggle-btn">
      <input
        className="toggle-input"
        id="check"
        type="checkbox"
        onChange={toggleTheme}
      />
      <label className="theme-label" htmlFor="check">
        <img className="sunmoon" src={sunmoon} alt="moon"></img>
      </label>
    </div>
  );
};

export default Toggler;
