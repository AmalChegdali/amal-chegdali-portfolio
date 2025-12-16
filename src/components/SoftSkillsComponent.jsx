import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useTranslation } from 'react-i18next';
import '../styles/soft-skills.css';

const SoftSkillsComponent = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  const { t } = useTranslation();

  const softSkills = [
    { name: t('softskills.communication'), icon: 'fas fa-comments', level: 97, color: '#10B981' },
    { name: t('softskills.discipline'), icon: 'fas fa-tasks', level: 95, color: '#3B82F6' },
    { name: t('softskills.teamwork'), icon: 'fas fa-users', level: 92, color: '#8B5CF6' },
    { name: t('softskills.problem.solving'), icon: 'fas fa-lightbulb', level: 90, color: '#F59E0B' },
    { name: t('softskills.adaptability'), icon: 'fas fa-sync-alt', level: 88, color: '#EC4899' },
    { name: t('softskills.leadership'), icon: 'fas fa-user-tie', level: 85, color: '#06B6D4' },
    { name: t('softskills.time.management'), icon: 'fas fa-clock', level: 93, color: '#14B8A6' },
    { name: t('softskills.creativity'), icon: 'fas fa-palette', level: 90, color: '#F97316' },
  ];

  return (
    <section className="soft-skills-section">
      <div className="container">
        <div className="section-heading text-center fade-in">
          <h2 className="gradient-text">{t('softskills.title')}</h2>
          <p className="section-subtitle">{t('softskills.subtitle')}</p>
        </div>
        <div className="soft-skills-grid">
          {softSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="soft-skill-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="soft-skill-icon-wrapper">
                <i className={skill.icon} style={{ color: skill.color }}></i>
              </div>
              <h4 className="soft-skill-name">{skill.name}</h4>
              <div className="soft-skill-progress-wrapper">
                <div className="soft-skill-progress-bar">
                  <div
                    className="soft-skill-progress-fill"
                    style={{
                      width: `${skill.level}%`,
                      backgroundColor: skill.color
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoftSkillsComponent;

