import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

interface ThemeToggleProps {
  darkMode: boolean;
  toggleTheme: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ darkMode, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className={`p-2 border-2 ${
        darkMode
          ? "border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-900"
          : "border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-white"
      } transition-colors duration-300`}
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
    </button>
  );
};

export default ThemeToggle;
