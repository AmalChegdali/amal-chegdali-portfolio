import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/services.css';

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: 'fas fa-code',
      title: t('services.web.development') || 'Développement Web',
      description: t('services.web.description') || 'Création d\'applications web modernes et responsives avec les dernières technologies',
      color: '#427fc4'
    },
    {
      icon: 'fas fa-mobile-alt',
      title: t('services.mobile.development') || 'Développement Mobile',
      description: t('services.mobile.description') || 'Applications mobiles cross-platform avec Flutter pour iOS et Android',
      color: '#3681bd'
    },
    {
      icon: 'fas fa-server',
      title: t('services.backend.development') || 'Développement Backend',
      description: t('services.backend.description') || 'APIs REST, microservices et architectures cloud avec Spring Boot et Django',
      color: '#a2c1e4'
    },
    {
      icon: 'fas fa-cloud',
      title: t('services.devops') || 'DevOps & Cloud',
      description: t('services.devops.description') || 'Déploiement, CI/CD, conteneurisation Docker et gestion d\'infrastructure cloud',
      color: '#427fc4'
    },
    {
      icon: 'fas fa-database',
      title: t('services.database') || 'Bases de Données',
      description: t('services.database.description') || 'Conception et optimisation de bases de données SQL et NoSQL',
      color: '#3681bd'
    },
    {
      icon: 'fas fa-chart-line',
      title: t('services.business.intelligence') || 'Business Intelligence',
      description: t('services.bi.description') || 'Dashboards Power BI et analyses de données pour la prise de décision',
      color: '#a2c1e4'
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-heading text-center fade-in">
          <h2 className="gradient-text">{t('services.title') || 'Services'}</h2>
          <p className="section-subtitle">{t('services.subtitle') || 'Ce que je peux faire pour vous'}</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="service-icon" style={{ backgroundColor: `${service.color}15` }}>
                <i className={service.icon} style={{ color: service.color }}></i>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

