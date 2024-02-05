import "./ThemeToggle.css";
import React, { useContext } from "react";
import sunmoon from "../../assets/sun-moon.svg";
import { ThemeContext } from "../../App";

const Toggler = () => {
  // use theme context api set on app page to access theme and set theme state varibles
  const { theme, setTheme } = useContext(ThemeContext);

  //changes set theme to false
  const setDarkMode = () => {
    setTheme(false);
    
  };

  //changes set theme to true
  const setLightMode = () => {
    setTheme(true);
    
  };

  // when checkbox is clicked fires onchange event which calls this function, gets passed the change event and checks if the checkbox is checked on not
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
