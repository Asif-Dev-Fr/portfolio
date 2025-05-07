import React, { useState, useEffect } from "react";

interface TypewriterTextProps {
  text: string;
  delay?: number;
  startDelay?: number;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({
  text,
  delay = 50,
  startDelay = 0,
}) => {
  const [displayedText, setDisplayedText] = useState<string>("");
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [started, setStarted] = useState<boolean>(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    // Initial delay before starting typing effect
    if (!started) {
      timeout = setTimeout(() => {
        setStarted(true);
      }, startDelay);
      return () => clearTimeout(timeout);
    }

    // Start typing effect
    if (started && currentIndex < text.length) {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, delay);
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, delay, started, startDelay, text]);

  return (
    <span>
      {displayedText}
      {currentIndex < text.length && <span className="animate-blink">_</span>}
    </span>
  );
};

export default TypewriterText;
