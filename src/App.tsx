import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setDarkMode(savedTheme === "dark");
    }

    // Apply theme
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <Router>
      <div
        className={`flex flex-col md:flex-row h-screen w-screen overflow-hidden font-pixelated transition-colors duration-300 ${
          darkMode
            ? "dark bg-gray-900 text-green-400"
            : "bg-gray-100 text-gray-800"
        }`}
      >
        {/* Main Content */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden bg-gray-100 dark:bg-gray-800 p-4">
          <div className="max-w-6xl mx-auto">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
