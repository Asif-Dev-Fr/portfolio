import { useState, useEffect } from "react";

// Définition d'un seuil pour distinguer mobile et desktop
const MOBILE_BREAKPOINT = 768; // en pixels

interface UseViewportReturn {
  isPcView: boolean;
  width: number;
  height: number;
}

/**
 * Hook personnalisé pour détecter le type d'appareil (mobile ou desktop)
 * basé sur la largeur de la fenêtre
 */
function useViewport(): UseViewportReturn {
  // État initial (avec une valeur par défaut raisonnable)
  const [width, setWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  const [height, setHeight] = useState<number>(
    typeof window !== "undefined" ? window.innerHeight : 0
  );

  useEffect(() => {
    // Vérification que window est disponible (important pour SSR)
    if (typeof window === "undefined") return;

    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    // Écouter les changements de taille de fenêtre
    window.addEventListener("resize", handleResize);

    // Nettoyer l'écouteur d'événement quand le composant est démonté
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Déterminer si l'appareil est mobile en fonction de la largeur de l'écran
  const isPcView = width > MOBILE_BREAKPOINT;

  return { isPcView, width, height };
}

export default useViewport;
