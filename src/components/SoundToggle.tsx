import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp, faVolumeMute } from "@fortawesome/free-solid-svg-icons";

interface SoundToggleProps {
  enabled: boolean;
  toggle: () => void;
}

const SoundToggle: React.FC<SoundToggleProps> = ({ enabled, toggle }) => {
  return (
    <button
      onClick={toggle}
      className={`p-2 border-2 ${
        enabled
          ? "border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-900"
          : "border-gray-500 text-gray-500 hover:bg-gray-500 hover:text-white"
      } transition-colors duration-300`}
      aria-label={enabled ? "Mute sound effects" : "Enable sound effects"}
    >
      <FontAwesomeIcon icon={enabled ? faVolumeUp : faVolumeMute} />
    </button>
  );
};

export default SoundToggle;
