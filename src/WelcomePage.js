import React, { useState, useEffect } from "react";
import './App.css';

const WelcomePage = ({ onEnter }) => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
    setTimeout(() => {
        setLoading(false);
        onEnter();
      }, 600);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, [onEnter]);

  return (
    <div className={`welcome-page ${fadeOut ? 'fade-out' : ''}`}>
      {loading ? (
        <div className="loading-content">
          <div className="welcome-animation">
            <div className="welcome-text-container">
              <h1 className="welcome-title">
                {['B', 'i', 'e', 'n', 'v', 'e', 'n', 'u', 'e'].map((letter, index) => (
                  <span key={index} className="letter" style={{'--i': index}}>{letter}</span>
                ))}
              </h1>
              <p className="welcome-subtitle">Portfolio d'Amal Chegdali</p>
            </div>
            <div className="loader-container">
              <div className="modern-loader">
                <div className="loader-ring"></div>
                <div className="loader-ring"></div>
                <div className="loader-ring"></div>
              </div>
            </div>
        </div>
        </div>
      ) : null}
    </div>
  );
};

export default WelcomePage;
