import React from "react";
import { Link } from "react-router-dom";

interface PixelButtonProps {
  children: React.ReactNode;
  to?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "danger";
  className?: string;
  disabled?: boolean;
}

const PixelButton: React.FC<PixelButtonProps> = ({
  children,
  to,
  onClick,
  variant = "primary",
  className = "",
  disabled = false,
}) => {
  const baseClasses =
    "border-2 font-bold transition-colors duration-300 inline-block text-center";

  const variantClasses = {
    primary: `border-green-400 ${
      disabled
        ? "bg-gray-700 text-gray-500 cursor-not-allowed"
        : "bg-green-400 text-gray-900 hover:bg-transparent hover:text-green-400"
    }`,
    secondary: `border-green-400 ${
      disabled
        ? "text-gray-500 cursor-not-allowed"
        : "text-green-400 hover:bg-green-400 hover:text-gray-900"
    }`,
    danger: `border-red-500 ${
      disabled
        ? "text-gray-500 cursor-not-allowed"
        : "text-red-500 hover:bg-red-500 hover:text-gray-900"
    }`,
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (to && !disabled) {
    return (
      <Link to={to} className={`${classes} px-4 py-2`}>
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={disabled ? undefined : onClick}
      className={`${classes} px-4 py-2`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default PixelButton;
