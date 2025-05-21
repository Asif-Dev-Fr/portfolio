import React, { useState } from "react";

interface PixelatedImageProps {
  src: string;
  alt: string;
  className?: string;
  height: number;
  ObjectFit?: "cover" | "contain" | "scale-down";
}

const PixelatedImage: React.FC<PixelatedImageProps> = ({
  src,
  alt,
  className = "",
  height,
  ObjectFit,
}) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-cover ${
          loaded ? "image-pixelated" : "invisible"
        }`}
        style={{
          height,
          objectFit: ObjectFit ?? "cover",
        }}
      />
      {!loaded && (
        <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
          <span className="text-green-400 animate-pulse">LOADING...</span>
        </div>
      )}
    </div>
  );
};

export default PixelatedImage;
