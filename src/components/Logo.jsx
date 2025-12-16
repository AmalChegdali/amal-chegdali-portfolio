import React from 'react';

const Logo = ({ className = "ImageLogo", size = 65 }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 120 120" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ transition: 'all 0.3s ease' }}
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: '#427fc4', stopOpacity: 1}} />
          <stop offset="50%" style={{stopColor: '#3681bd', stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: '#a2c1e4', stopOpacity: 1}} />
        </linearGradient>
        <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: '#ffffff', stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: '#e8f4f8', stopOpacity: 1}} />
        </linearGradient>
        <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000000" floodOpacity="0.3"/>
        </filter>
        <filter id="glow">
          <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Background Circle with subtle shadow */}
      <circle cx="60" cy="60" r="58" fill="url(#logoGradient)" stroke="#ffffff" strokeWidth="2.5" opacity="0.98"/>
      
      {/* Inner decorative ring */}
      <circle cx="60" cy="60" r="52" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.3"/>
      
      {/* Letter A - Enhanced with shadow */}
      <text 
        x="35" 
        y="82" 
        fontFamily="'Segoe UI', 'Arial Black', Arial, sans-serif" 
        fontSize="38" 
        fontWeight="900" 
        fill="url(#textGradient)"
        filter="url(#shadow)"
        style={{ 
          fontStyle: 'normal', 
          letterSpacing: '1px',
          textShadow: '0 2px 4px rgba(0,0,0,0.3)'
        }}
      >
        A
      </text>
      
      {/* Letter C - Enhanced with shadow */}
      <text 
        x="72" 
        y="82" 
        fontFamily="'Segoe UI', 'Arial Black', Arial, sans-serif" 
        fontSize="38" 
        fontWeight="900" 
        fill="url(#textGradient)"
        filter="url(#shadow)"
        style={{ 
          fontStyle: 'normal', 
          letterSpacing: '1px',
          textShadow: '0 2px 4px rgba(0,0,0,0.3)'
        }}
      >
        C
      </text>
      
      {/* Decorative accent dots - subtle */}
      <circle cx="25" cy="25" r="2" fill="#ffffff" opacity="0.6"/>
      <circle cx="95" cy="25" r="2" fill="#ffffff" opacity="0.6"/>
      <circle cx="25" cy="95" r="2" fill="#ffffff" opacity="0.6"/>
      <circle cx="95" cy="95" r="2" fill="#ffffff" opacity="0.6"/>
      
      {/* Subtle shine overlay */}
      <ellipse cx="50" cy="50" rx="30" ry="30" fill="url(#textGradient)" opacity="0.08"/>
    </svg>
  );
};

export default Logo;
