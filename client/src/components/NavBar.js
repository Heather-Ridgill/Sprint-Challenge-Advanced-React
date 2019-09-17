import React from "react";
import useDarkMode from "../hooks/useDarkMode.js";

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      {/* <h1>Crypto Tracker</h1> */}
      <div className="dark-mode__toggle">
        <button
          onClick={toggleMode}
          className={darkMode ? "toggle toggled" : "toggle"}
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
