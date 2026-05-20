import { useState } from "react";

interface DesktopIconProps {
  icon: string;
  label: string;
  onClick: () => void;
}

const DesktopIcon = ({ icon, label, onClick }: DesktopIconProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`flex flex-col items-center gap-2 p-4 rounded-lg transition-all cursor-pointer ${
        isHovered ? "animate-pixel-bounce" : ""
      }`}
    >
      <div
        className={`w-20 h-20 md:w-24 md:h-24 transition-all ${
          isHovered ? "glow-cyan scale-110" : ""
        }`}
      >
        <img
          src={icon}
          alt={label}
          className="w-full h-full object-contain"
        />
      </div>
      <span
        className={`text-xs md:text-sm font-pixel text-foreground transition-all ${
          isHovered ? "text-neon-cyan" : ""
        }`}
      >
        {label}
      </span>
    </button>
  );
};

export default DesktopIcon;
