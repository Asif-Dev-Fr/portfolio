import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PixelatedImage from "../components/PixelatedImage";
import TypewriterText from "../components/TypewriterText";
import PROFILE from "../assets/images/profile.png";
import useViewport from "../hooks/useUserView";

const Home: React.FC = () => {
  const [showContent, setShowContent] = useState<boolean>(false);
  const { isPcView } = useViewport();

  useEffect(() => {
    // Slight delay for dramatic effect when entering the page
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const lvlCss: string = isPcView
    ? "absolute -bottom-6 -right-0 p-2 bg-gray-900 dark:bg-gray-800 border-2 border-green-400 text-green-400 text-sm"
    : "absolute -bottom-20 -right-0 p-2 bg-gray-900 dark:bg-gray-800 border-2 border-green-400 text-green-400 text-sm";

  return (
    <div className="min-h-full flex flex-col ">
      <div
        className={`transition-opacity duration-1000 ${
          showContent ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-green-400 pixel-shadow">
              <TypewriterText text="ASIF KASSAM ALI" delay={100} />
            </h1>

            <div className="text-lg md:text-xl text-green-200 dark:text-green-300 mb-6">
              <TypewriterText
                text="FULL STACK DEVELOPER"
                delay={80}
                startDelay={1500}
              />
            </div>

            <div className="text-sm md:text-base text-green-200 dark:text-green-200 mb-8 leading-relaxed">
              <TypewriterText
                text="SPECIALIZING IN REACT, NODE.JS, TYPESCRIPT AND MODERN WEB TECHNOLOGIES."
                delay={30}
                startDelay={2500}
              />
            </div>

            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
              <Link
                to="/profile"
                className="border-2 border-green-400 bg-green-400 text-gray-900 px-4 py-2 font-bold 
                  hover:bg-transparent hover:text-green-400 transition-colors duration-300"
              >
                VIEW PROFILE
              </Link>
              <Link
                to="/contact"
                className="border-2 border-green-400 text-green-400 px-4 py-2 font-bold 
                  hover:bg-green-400 hover:text-gray-900 transition-colors duration-300"
              >
                CONTACT ME
              </Link>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <PixelatedImage
                src={PROFILE}
                alt="Asif Kassam Ali"
                className="border-4 border-green-400"
                height={320}
              />
              <div className={lvlCss}>LVL 63 DEVELOPER</div>
            </div>
          </div>
        </div>

        <div className="mt-12 p-6 border-2 border-green-400 bg-gray-800 dark:bg-gray-900">
          <h2 className="text-2xl font-bold mb-4 text-green-400">
            TECH SKILLS
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "React", level: 85 },
              { name: "TypeScript", level: 80 },
              { name: "JavaScript", level: 90 },
              { name: "HTML/CSS", level: 95 },
              { name: "Node.js", level: 53 },
              { name: "DynamoDB", level: 62 },
              // { name: "Express", level: 75 },
              // { name: "Tailwind", level: 80 },
            ].map((skill) => (
              <div key={skill.name} className="mb-3">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-green-400">
                    {skill.name}
                  </span>
                  <span className="text-xs text-green-500">
                    {skill.level}/100
                  </span>
                </div>
                <div className="w-full bg-gray-700">
                  <div
                    className="bg-green-400 h-2"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-xs text-green-500">
            © 2025 - ASIF KASSAM ALI- ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
