import { useCallback, useEffect, useRef } from "react";

type SoundType =
  | "click"
  | "hover"
  | "menu"
  | "select"
  | "start"
  | "success"
  | "error";

interface SoundMap {
  [key: string]: HTMLAudioElement;
}

const useSound = () => {
  const soundsRef = useRef<SoundMap>({});

  // Initialize sound effects
  useEffect(() => {
    // These URLs would point to your actual sound files
    const soundPaths: Record<SoundType, string> = {
      click: "/sounds/click.mp3",
      hover: "/sounds/hover.mp3",
      menu: "/sounds/menu.mp3",
      select: "/sounds/select.mp3",
      start: "/sounds/start.mp3",
      success: "/sounds/success.mp3",
      error: "/sounds/error.mp3",
    };

    // Preload sounds
    Object.entries(soundPaths).forEach(([name, path]) => {
      const audio = new Audio(path);
      audio.preload = "auto";
      soundsRef.current[name] = audio;
    });

    return () => {
      // Cleanup
      Object.values(soundsRef.current).forEach((audio) => {
        audio.pause();
        audio.src = "";
      });
      soundsRef.current = {};
    };
  }, []);

  const playSound = useCallback((type: SoundType) => {
    const sound = soundsRef.current[type];
    if (sound) {
      // Stop and reset before playing to allow rapid triggering
      sound.pause();
      sound.currentTime = 0;

      // Some browsers block autoplay, so we handle the promise rejection
      const playPromise = sound.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay was prevented, we can ignore this error
        });
      }
    }
  }, []);

  return { playSound };
};

export default useSound;
