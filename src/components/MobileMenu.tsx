import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import useSound from "../hooks/useSound";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  // faLaptopCode,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

interface MobileMenuProps {
  closeMenu: () => void;
  soundEnabled?: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ closeMenu, soundEnabled }) => {
  const location = useLocation();
  const { playSound } = useSound();

  // Close menu when clicking outside or pressing escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [closeMenu]);

  const handleNavClick = () => {
    if (soundEnabled) playSound("select");
    closeMenu();
  };

  const navigationItems = [
    { path: "/", label: "HOME", icon: faHome },
    { path: "/profile", label: "PROFILE", icon: faUser },
    // { path: "/projects", label: "PROJECTS", icon: faLaptopCode },
    { path: "/contact", label: "CONTACT", icon: faEnvelope },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-gray-900 bg-opacity-95 animate-fadeIn">
      <div className="flex flex-col h-full">
        <div className="flex justify-end p-4">
          <button
            onClick={closeMenu}
            className="text-3xl text-green-400 border-2 border-green-400 w-10 h-10 flex items-center justify-center hover:bg-green-400 hover:text-gray-900 transition-colors"
          >
            ×
          </button>
        </div>

        <nav className="flex-1 flex items-center justify-center">
          <ul className="space-y-6 w-4/5">
            {navigationItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <li key={item.path} className="animate-slideIn">
                  <Link
                    to={item.path}
                    onClick={handleNavClick}
                    className={`flex items-center p-4 w-full border-2 transition-all duration-300 ${
                      isActive
                        ? "bg-green-400 text-gray-900 border-green-500"
                        : "bg-transparent text-green-400 border-green-400 hover:bg-green-400 hover:text-gray-900"
                    }`}
                  >
                    <FontAwesomeIcon icon={item.icon} className="mr-3" />
                    <span className="font-bold tracking-wider text-xl">
                      {item.label}
                    </span>
                    {isActive && <span className="ml-2">➤</span>}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="p-4 text-center text-green-500 text-sm">
          <div>PRESS ESC TO CLOSE MENU</div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
