
import React from 'react';

interface WangoesLogoProps {
  className?: string;
}

const WangoesLogo: React.FC<WangoesLogoProps> = ({ className = 'h-10 w-10' }) => {
  return (
    <div className="flex items-center space-x-2">
      <svg
        className={className}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Wangoes Logo"
      >
        <circle cx="50" cy="50" r="50" fill="#EF4444" />
        <path
          d="M38 35H62V42H53V51.3L59.2 65H51.5L47.5 56.1V42H43V60L38.5 70L33 60V35H38Z M47.5 47V51.3L41.3 65H48.5L53 56.1V47H47.5Z"
          transform="translate(-2, 0) scale(1.1)"
          fill="white"
        />
        <path
            d="M31 65 L41.5 45 L50 60 L58.5 45 L69 65"
            stroke="white"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            transform="translate(0, 5) scale(1)"
        />
      </svg>
      <span className="text-2xl font-bold text-white">Wangoes</span>
    </div>
  );
};

export default WangoesLogo;
