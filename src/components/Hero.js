import React from 'react';
import { useTranslation } from 'react-i18next';
import ParticlesComponent from './Particle.jsx';
import '../styles/hero-animations.css';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section id="welcome-hero">
      <div style={{
        position: 'relative',
        height: '890px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <ParticlesComponent
          id="particles"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 0
          }}
        />
        <div style={{ zIndex: 2, position: 'relative' }}>
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <div className="header-text fade-in">
                  <h2 className="hero-title">
                    <span className="hero-greeting animate-text">{t("greeting")}<span className="hero-comma">,</span></span>
                    <span className="hero-i-am animate-text-delay-1">{t("My")}</span>
                    <br />
                    <span className="hero-name animate-text-delay-2">Amal</span>
                    <br />
                    <span className="hero-surname animate-text-delay-3">Chegdali<span className="hero-dot">.</span></span>
                  </h2>
                  <p className="hero-status animate-fade-in">{t("Status")}</p>
                  <a href="download/Amal Chegdali_CV.pdf" download className="enhanced-button animate-button">
                    <span>{t("Cv")}</span>
                    <i className="fas fa-download"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

