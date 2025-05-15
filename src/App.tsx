import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import MobileMenu from "./components/MobileMenu";
import Home from "./pages/Home";
import About from "./pages/About";
// import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import ThemeToggle from "./components/ThemeToggle";
import StartScreen from "./components/StartScreen";
import SoundToggle from "./components/SoundToggle";
import useSound from "./hooks/useSound";

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [showStartScreen, setShowStartScreen] = useState<boolean>(true);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const { playSound } = useSound();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setDarkMode(savedTheme === "dark");
    }

    // Apply theme
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const toggleTheme = () => {
    // if (soundEnabled) playSound("click");
    const newTheme = !darkMode;
    setDarkMode(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  const toggleMobileMenu = () => {
    // if (soundEnabled) playSound("menu");
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const startGame = () => {
    // if (soundEnabled) playSound("start");
    setShowStartScreen(false);
  };

  if (showStartScreen) {
    return <StartScreen onStart={startGame} />;
  }

  return (
    <Router>
      <div
        className={`flex flex-col md:flex-row h-screen w-screen overflow-hidden font-pixelated transition-colors duration-300 ${
          darkMode
            ? "dark bg-gray-900 text-green-400"
            : "bg-gray-100 text-gray-800"
        }`}
      >
        {/* Mobile Navigation Header */}
        <div className="md:hidden flex justify-between items-center p-4 bg-gray-800 dark:bg-gray-900 border-b-2 border-green-400">
          <h1 className="text-xl font-bold text-green-400 pixel-shadow">
            ASIF.DEV
          </h1>
          <div className="flex items-center">
            <SoundToggle
              enabled={soundEnabled}
              toggle={() => setSoundEnabled(!soundEnabled)}
            />
            <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />
            <button
              onClick={toggleMobileMenu}
              className="ml-4 p-2 border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-900 transition-colors duration-300"
            >
              {isMobileMenuOpen ? "×" : "≡"}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <MobileMenu
            closeMenu={() => setIsMobileMenuOpen(false)}
            soundEnabled={soundEnabled}
          />
        )}

        {/* Sidebar (desktop) */}
        <div className="hidden md:block w-64 border-r-2 border-green-400 dark:border-green-500 bg-gray-800 dark:bg-gray-900 p-4">
          <Sidebar darkMode={darkMode} soundEnabled={soundEnabled} />
          <div className="mt-auto flex justify-center space-x-4 pt-4">
            <SoundToggle
              enabled={soundEnabled}
              toggle={() => setSoundEnabled(!soundEnabled)}
            />
            <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden bg-gray-100 dark:bg-gray-800 p-4">
          <div className="max-w-6xl mx-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<About />} />
              {/* <Route path="/projects" element={<Projects />} /> */}
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
