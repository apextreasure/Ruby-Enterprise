import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'light',
  className = '',
  showText = true,
  size = 'md',
}) => {
  const isLight = variant === 'light';

  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-11 h-11',
    lg: 'w-14 h-14',
    xl: 'w-16 h-16',
  };

  const titleSizes = {
    sm: 'text-base font-extrabold',
    md: 'text-xl font-black',
    lg: 'text-2xl font-black',
    xl: 'text-3xl font-black',
  };

  const subSizes = {
    sm: 'text-[9px]',
    md: 'text-[11px]',
    lg: 'text-xs',
    xl: 'text-sm',
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* 
        PREMIUM ARCHITECTURAL LOGOMARK FOR RUBY ENTERPRISE
        Concept: 
        1. Heavy Architectural Roof Truss (Bumbung Kukuh / Bold Steel Gable)
        2. Solid Hexagonal Diamond/Ruby Silhouette (Ruby Identity)
        3. Precision Solar Photovoltaic Grid angled inside
        4. Heavy Steel Foundation Beams (Struktur Tapak & Tiang Konkrit)
        Bold, high-contrast, perfectly visible at small mobile sizes without muddy hairlines.
      */}
      <div className={`relative flex-shrink-0 ${iconSizes[size]}`}>
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-md transition-transform duration-200 hover:scale-105"
          aria-hidden="true"
        >
          <defs>
            {/* Bold Construction Gold Gradient */}
            <linearGradient id="rubyGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FDE047" />
              <stop offset="50%" stopColor="#FACC15" />
              <stop offset="100%" stopColor="#EAB308" />
            </linearGradient>

            {/* Deep Navy Gradient */}
            <linearGradient id="rubyNavy" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1E3A8A" />
              <stop offset="100%" stopColor="#0B2545" />
            </linearGradient>

            {/* Vivid Solar Cyan */}
            <linearGradient id="solarCyan" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="100%" stopColor="#0284C7" />
            </linearGradient>
          </defs>

          {/* Background Rounded Shield Tile with Sharp Contrast */}
          <rect
            x="4"
            y="4"
            width="92"
            height="92"
            rx="18"
            fill={isLight ? '#0B2545' : '#0F172A'}
            stroke={isLight ? '#FACC15' : '#E2E8F0'}
            strokeWidth="3"
          />

          {/* 1. Heavy Bold Architectural Gable Peak (Bumbung Konkrit & Keluli) */}
          <path
            d="M50 16L84 43H70L50 27L30 43H16L50 16Z"
            fill="url(#rubyGold)"
          />

          {/* 2. Left Structural Concrete Pillar / Left Leg */}
          <path
            d="M20 48H32V80H20V48Z"
            fill="url(#rubyGold)"
          />

          {/* 3. Center-Right Angled Solar Panel Array & Structural Bracing */}
          {/* Solar cell 1 (Top Left) */}
          <path
            d="M36 48H49V62H36V48Z"
            fill="#38BDF8"
            opacity="0.9"
          />
          {/* Solar cell 2 (Top Right) */}
          <path
            d="M53 48H66V62H53V48Z"
            fill="#38BDF8"
            opacity="0.9"
          />
          {/* Solar cell 3 (Bottom Left) */}
          <path
            d="M36 66H49V80H36V66Z"
            fill="#38BDF8"
            opacity="0.9"
          />
          {/* Solar cell 4 (Bottom Right) */}
          <path
            d="M53 66H66V80H53V66Z"
            fill="#38BDF8"
            opacity="0.9"
          />

          {/* 4. Right Heavy Column Beam (Completing the Architectural Framing) */}
          <path
            d="M70 48H82V80H70V48Z"
            fill="url(#rubyGold)"
          />

          {/* 5. Central Clean Water Droplet / Sparkle Accent (Clean Solar Indicator) */}
          <path
            d="M51 28C51 28 47 34 47 37C47 39.2 48.8 41 51 41C53.2 41 55 39.2 55 37C55 34 51 28 51 28Z"
            fill="#FFFFFF"
          />
          {/* Sparkle glint on apex */}
          <circle cx="51" cy="22" r="2" fill="#FFFFFF" />

          {/* 6. Heavy Foundation Base Beam (Tapak Asas Kukuh) */}
          <rect
            x="14"
            y="83"
            width="72"
            height="4.5"
            rx="2"
            fill="url(#rubyGold)"
          />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col leading-none">
          <div className="flex items-center gap-1.5">
            <span
              className={`tracking-tight uppercase font-sans ${titleSizes[size]} ${
                isLight ? 'text-white' : 'text-[#0B2545]'
              }`}
            >
              RUBY{' '}
              <span className="text-[#FACC15] font-black tracking-normal">
                ENTERPRISE
              </span>
            </span>
          </div>

          <div className="flex items-center gap-2 mt-1">
            <span
              className={`font-extrabold uppercase tracking-wider ${subSizes[size]} ${
                isLight ? 'text-amber-300' : 'text-[#133E87]'
              }`}
            >
              KONTRAKTOR BINAAN &amp; SERVIS SOLAR
            </span>
            <span
              className={`hidden sm:inline-block w-1 h-1 rounded-full ${
                isLight ? 'bg-amber-400' : 'bg-[#133E87]'
              }`}
            />
            <span
              className={`hidden sm:inline-block text-[10px] font-bold uppercase tracking-wider ${
                isLight ? 'text-slate-300' : 'text-slate-500'
              }`}
            >
              CIDB G1–G4
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
