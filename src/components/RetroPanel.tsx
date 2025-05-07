import React from "react";

interface RetroPanelProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const RetroPanel: React.FC<RetroPanelProps> = ({
  title,
  children,
  className = "",
}) => {
  return (
    <div
      className={`border-2 border-green-400 bg-gray-800 dark:bg-gray-900 ${className}`}
    >
      {title && (
        <div className="border-b-2 border-green-400 bg-green-400 text-gray-900 p-2">
          <h3 className="font-bold">{title}</h3>
        </div>
      )}
      <div className="p-4">{children}</div>
    </div>
  );
};

export default RetroPanel;
