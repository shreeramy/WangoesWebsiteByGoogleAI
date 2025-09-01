
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
        <circle cx="50" cy="50" r="50" fill="#EF4444" />
        <path 
            d="M30 35 H70 M50 35 V50 M30 70 L40 50 L50 65 L60 50 L70 70" 
            stroke="white" 
            strokeWidth="8" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
        />
      </svg>
      <span className="text-2xl font-bold text-white">Wangoes</span>
    </div>
  );
};

export default WangoesLogo;
