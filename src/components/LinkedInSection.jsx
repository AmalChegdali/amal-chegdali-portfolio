import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/linkedin.css';

const LinkedInSection = () => {
  const { t } = useTranslation();

  const linkedInUrl = 'https://www.linkedin.com/in/amal-chegdali-37a5b9239/';

  return (
    <section className="linkedin-section">
      <div className="container">
        <div className="linkedin-card">
          <div className="linkedin-card-content">
            <div className="linkedin-icon-wrapper">
              <i className="fab fa-linkedin linkedin-icon"></i>
            </div>
            <div className="linkedin-text-content">
              <h3 className="linkedin-title">{t('linkedin.title')}</h3>
              <p className="linkedin-description">{t('linkedin.description')}</p>
              <div className="linkedin-stats">
                <div className="linkedin-stat-item">
                  <i className="fas fa-users"></i>
                  <span>{t('linkedin.connect')}</span>
                </div>
                <div className="linkedin-stat-item">
                  <i className="fas fa-briefcase"></i>
                  <span>{t('linkedin.network')}</span>
                </div>
                <div className="linkedin-stat-item">
                  <i className="fas fa-certificate"></i>
                  <span>{t('linkedin.certifications')}</span>
                </div>
              </div>
              <a 
                href={linkedInUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="linkedin-cta-button"
              >
                <i className="fab fa-linkedin"></i>
                <span>{t('linkedin.view.profile')}</span>
                <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
          <div className="linkedin-visual">
            <div className="linkedin-qr-placeholder">
              <i className="fab fa-linkedin"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LinkedInSection;

