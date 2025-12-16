import React, { useEffect, useState } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useTranslation } from 'react-i18next';
import '../styles/skills.css';

const SkillsComponent = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false
    });
  }, []);

  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('all');

  // Compétences organisées par catégories professionnelles
  const skillsCategories = [
    {
      id: 'languages',
      titleKey: 'skills.category.languages',
      icon: '💻',
      skills: [
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', level: 90, years: '3+' },
        { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', level: 85, years: '2+' },
        { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', level: 85, years: '2+' },
        { name: 'Dart', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg', level: 92, years: '2+' },
      ]
    },
    {
      id: 'frontend',
      titleKey: 'skills.category.frontend',
      icon: '🎨',
      skills: [
        { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', level: 85, years: '2+' },
        { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg', level: 82, years: '1+' },
        { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', level: 95, years: '4+' },
        { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', level: 95, years: '4+' },
      ]
    },
    {
      id: 'backend',
      titleKey: 'skills.category.backend',
      icon: '⚙️',
      skills: [
        { name: 'Spring Boot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg', level: 88, years: '2+' },
        { name: '.NET', icon: 'https://www.vectorlogo.zone/logos/dotnet/dotnet-icon.svg', level: 80, years: '1+' },
        { name: 'Django', icon: 'https://www.vectorlogo.zone/logos/djangoproject/djangoproject-icon.svg', level: 85, years: '2+' },
      ]
    },
    {
      id: 'mobile',
      titleKey: 'skills.category.mobile',
      icon: '📱',
      skills: [
        { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg', level: 92, years: '2+' },
        { name: 'Android', icon: 'https://www.vectorlogo.zone/logos/android/android-icon.svg', level: 85, years: '2+' },
      ]
    },
    {
      id: 'database',
      titleKey: 'skills.category.databases',
      icon: '🗄️',
      skills: [
        { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', level: 90, years: '2+' },
        { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', level: 85, years: '1+' },
        { name: 'SQL', icon: 'https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg', level: 90, years: '3+' },
      ]
    },
    {
      id: 'data',
      titleKey: 'skills.category.data',
      icon: '📊',
      skills: [
        { name: 'Machine Learning', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg', level: 75, years: '1+' },
        { name: 'Power BI', icon: 'https://www.vectorlogo.zone/logos/microsoft_powerbi/microsoft_powerbi-icon.svg', level: 80, years: '1+' },
      ]
    },
    {
      id: 'devops',
      titleKey: 'skills.category.devops',
      icon: '🚀',
      skills: [
        { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', level: 80, years: '1+' },
        { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', level: 90, years: '3+' },
        { name: 'Azure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg', level: 75, years: '1+' },
        { name: 'Jenkins', icon: 'https://www.vectorlogo.zone/logos/jenkins/jenkins-icon.svg', level: 75, years: '1+' },
        { name: 'Microservices', icon: 'https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg', level: 80, years: '1+' },
      ]
    }
  ];

  const getLevelLabel = (level) => {
    if (level >= 90) return t('skills.level.expert');
    if (level >= 80) return t('skills.level.advanced');
    if (level >= 70) return t('skills.level.intermediate');
    return t('skills.level.beginner');
  };

  const getLevelColor = (level) => {
    if (level >= 90) return '#10B981';
    if (level >= 80) return '#3B82F6';
    if (level >= 70) return '#F59E0B';
    return '#EF4444';
  };

  const shouldShowCategory = (categoryId) => {
    return activeCategory === 'all' || activeCategory === categoryId;
  };

  return (
    <div className="skills-professional">
      <div className="container">
        {/* Category Tabs */}
        <div className="skills-category-tabs">
          <button
            className={`category-tab ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => setActiveCategory('all')}
            data-aos="fade-up"
          >
            <span className="tab-icon">✨</span>
            <span className="tab-title">{t('skills.show.all')}</span>
          </button>
          {skillsCategories.map((category, index) => (
            <button
              key={category.id}
              className={`category-tab ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <span className="tab-icon">{category.icon}</span>
              <span className="tab-title">{t(category.titleKey)}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="skills-grid-container">
          {skillsCategories.map((category) => {
            if (!shouldShowCategory(category.id)) return null;
            
            return (
              <div
                key={category.id}
                className="skills-category-grid"
                data-aos="fade-up"
              >
                <div className="category-header">
                  <h3 className="category-title">
                    <span className="category-icon">{category.icon}</span>
                    {t(category.titleKey)}
                  </h3>
                </div>
                <div className="skills-grid">
                  {category.skills.map((skill, index) => (
                    <div
                      key={skill.name}
                      className="skill-card"
                      data-aos="zoom-in"
                      data-aos-delay={index * 100}
                    >
                      <div className="skill-card-header">
                        <div className="skill-icon-wrapper">
                          <img src={skill.icon} alt={skill.name} className="skill-icon" />
                        </div>
                        <div className="skill-header-info">
                          <h4 className="skill-name">{skill.name}</h4>
                          <span className="skill-years">{skill.years} {t('skills.years')}</span>
                        </div>
                      </div>
                      <div className="skill-card-body">
                        <div className="skill-level-info">
                          <span className="skill-level-label">{getLevelLabel(skill.level)}</span>
                          <span className="skill-level-percentage">{skill.level}%</span>
                        </div>
                        <div className="skill-progress-bar">
                          <div
                            className="skill-progress-fill"
                            style={{
                              width: `${skill.level}%`,
                              backgroundColor: getLevelColor(skill.level)
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SkillsComponent;
