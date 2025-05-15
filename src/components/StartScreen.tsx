import React, { useState } from "react";

interface StartScreenProps {
  onStart: () => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  // const [showPressStart, setShowPressStart] = useState<boolean>(true);
  const [fadeOut, setFadeOut] = useState<boolean>(false);

  // Blinking "PRESS START" text effect
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setShowPressStart((prev) => !prev);
  //   }, 800);

  //   return () => clearInterval(interval);
  // }, []);

  const handleStart = () => {
    setFadeOut(true);
    setTimeout(onStart, 1000);
  };

  return (
    <div
      className={`flex flex-col items-center justify-center h-screen bg-black ${
        fadeOut ? "animate-fadeOut" : ""
      }`}
      onClick={handleStart}
    >
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 text-green-400 pixel-shadow animate-pulse">
          ASIF KASSAM ALI
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-green-400 pixel-shadow">
          DEVELOPER PORTFOLIO
        </h2>

        {
          <p className="text-2xl font-bold text-green-400 pixel-shadow mt-8 animate-pulse">
            PRESS START
          </p>
        }

        <div className="mt-16 text-xs text-green-500">
          © 2025 - ASIF KASSAM - ALL RIGHTS RESERVED
        </div>
      </div>
    </div>
  );
};

export default StartScreen;
