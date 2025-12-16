import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import 'aos/dist/aos.css';
import AOS from 'aos';
import '../styles/certifications.css';

const Certifications = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  const { t } = useTranslation();

  const certifications = [
    {
      title: 'Certification AWS',
      issuer: 'Amazon Web Services',
      date: '2024',
      icon: 'fab fa-aws',
      color: '#FF9900',
      description: t('certifications.aws.description') || 'Cloud Computing Fundamentals'
    },
    {
      title: 'Certification Docker',
      issuer: 'Docker Inc.',
      date: '2024',
      icon: 'fab fa-docker',
      color: '#2496ED',
      description: t('certifications.docker.description') || 'Containerization & Orchestration'
    },
    {
      title: 'Certification Git/GitHub',
      issuer: 'GitHub',
      date: '2023',
      icon: 'fab fa-github',
      color: '#181717',
      description: t('certifications.git.description') || 'Version Control & Collaboration'
    }
  ];

  return (
    <section className="certifications-section">
      <div className="container">
        <div className="section-heading text-center fade-in">
          <h2 className="gradient-text">{t('certifications.title') || 'Certifications'}</h2>
          <p className="section-subtitle">
            {t('certifications.subtitle') || 'Reconnaissances de mes compétences techniques'}
          </p>
        </div>
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="certification-card"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="certification-icon" style={{ color: cert.color }}>
                <i className={cert.icon}></i>
              </div>
              <h3 className="certification-title">{cert.title}</h3>
              <p className="certification-issuer">{cert.issuer}</p>
              <p className="certification-date">{cert.date}</p>
              <p className="certification-description">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

