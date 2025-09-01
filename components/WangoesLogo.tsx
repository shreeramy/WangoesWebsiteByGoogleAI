
import React from 'react';

interface WangoesLogoProps {
  className?: string;
}

const WangoesLogo: React.FC<WangoesLogoProps> = ({ className = 'h-10 w-10' }) => {
  return (
    <div className="flex items-center space-x-3">
      <svg
        className={className}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Wangoes Logo"
      >
        <circle cx="50" cy="50" r="48" fill="#EF4444" />
        <path 
            d="M50 28V47L35 72L50 55L65 72L50 47V28H30V34H70V28H50Z"
            stroke="white" 
            strokeWidth="8" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
        />
      </svg>
      <span className="text-xl font-bold text-white whitespace-nowrap">Wangoes Technologies</span>
    </div>
  );
};

export default WangoesLogo;
