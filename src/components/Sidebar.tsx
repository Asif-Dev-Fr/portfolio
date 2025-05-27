import React from "react";
import { Link, useLocation } from "react-router-dom";
import useSound from "../hooks/useSound";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  // faLaptopCode,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

interface SidebarProps {
  darkMode?: boolean;
  soundEnabled?: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ /*darkMode,*/ soundEnabled }) => {
  const location = useLocation();
  const { playSound } = useSound();

  const handleNavClick = () => {
    if (soundEnabled) playSound("menu");
  };

  const navigationItems = [
    { path: "/", label: "HOME", icon: faHome },
    { path: "/profile", label: "PROFILE", icon: faUser },
    // { path: "/projects", label: "PROJECTS", icon: faLaptopCode },
    { path: "/contact", label: "CONTACT", icon: faEnvelope },
  ];

  const HP: number = 80;
  const MP: number = 70;

  const fillColor = (value: number) => {
    return {
      width: "10ch",
      height: "1em",
      background: `linear-gradient(to right, 
        #05DF72 0%, #05DF72 ${value}%, 
        #c6d7f2 ${value}%, #c6d7f2 100%)`,
    };
  };

  return (
    <div className="h-full flex flex-col">
      <div className="mb-8 text-center">
        <h1 className="text-2xl font-bold text-green-400 pixel-shadow">
          ASIF KASSAM ALI
        </h1>
        <div className="mt-2 text-sm text-green-500">FULL STACK DEVELOPER</div>
      </div>

      <nav className="flex-1">
        <ul className="space-y-4">
          {navigationItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  onClick={handleNavClick}
                  className={`flex items-center p-3 w-full border-2 transition-all duration-300 ${
                    isActive
                      ? "bg-green-400 text-gray-900 border-green-500"
                      : "bg-transparent text-green-400 border-green-400 hover:bg-green-400 hover:text-gray-900"
                  }`}
                  style={{ cursor: isActive ? "auto" : "pointer" }}
                >
                  <FontAwesomeIcon icon={item.icon} className="mr-3" />
                  <span className="font-bold tracking-wider">{item.label}</span>
                  {isActive && <span className="ml-2">➤</span>}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="mt-8 text-green-500 text-xs">
        <div className="mb-2">LVL 63 DEVELOPER</div>
        <div style={{ width: "200px" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <span style={{ marginRight: "2px", width: "20px" }}>HP</span>
            <div style={fillColor(HP)}></div>
            <span style={{ marginLeft: "2px" }}>{HP}/100</span>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <span style={{ marginRight: "2px", width: "20px" }}>MP</span>
            <div style={fillColor(MP)}></div>
            <span style={{ marginLeft: "2px" }}>{MP}/100</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
