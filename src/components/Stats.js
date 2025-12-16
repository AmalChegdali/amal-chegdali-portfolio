import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

const Stats = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);

  const stats = useMemo(() => [
    {
      icon: 'fa fa-code',
      number: 16,
      label: t('Projets réalisés') || 'Projets réalisés',
      suffix: '+',
      color: '#427fc4'
    },
    {
      icon: 'fa fa-github',
      number: 2,
      label: t('Années d\'expérience') || 'Années d\'expérience',
      suffix: '+',
      color: '#3681bd'
    },
    {
      icon: 'fa fa-graduation-cap',
      number: 5,
      label: t('Années d\'études') || 'Années d\'études',
      suffix: '',
      color: '#a2c1e4'
    },
    {
      icon: 'fa fa-certificate',
      number: 3,
      label: t('Certifications') || 'Certifications',
      suffix: '+',
      color: '#427fc4'
    }
  ], [t]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    const currentRef = statsRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const [counters, setCounters] = useState(stats.map(() => 0));

  useEffect(() => {
    if (isVisible) {
      const timers = stats.map((stat, index) => {
        const duration = 2000; // 2 seconds
        const steps = 60;
        const increment = stat.number / steps;
        const stepDuration = duration / steps;

        let currentStep = 0;
        const timer = setInterval(() => {
          currentStep++;
          setCounters((prev) => {
            const newCounters = [...prev];
            if (currentStep <= steps) {
              newCounters[index] = Math.min(
                Math.floor(increment * currentStep),
                stat.number
              );
            } else {
              newCounters[index] = stat.number;
              clearInterval(timer);
            }
            return newCounters;
          });
        }, stepDuration);

        return timer;
      });

      return () => {
        timers.forEach((timer) => clearInterval(timer));
      };
    }
  }, [isVisible, stats]);

  return (
    <section
      className="stats-section"
      style={{
        backgroundColor: '#f9fbfd',
        padding: '80px 0',
        position: 'relative',
        zIndex: 2
      }}
      ref={statsRef}
    >
      <div className="container">
        <div className="row">
          {stats.map((stat, index) => (
            <div key={index} className="col-md-3 col-sm-6">
              <div
                className={`stat-card ${isVisible ? 'animate-in' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="stat-icon" style={{ color: stat.color }}>
                  <i className={stat.icon}></i>
                </div>
                <div className="stat-number" style={{ color: stat.color }}>
                  {counters[index]}
                  {stat.suffix}
                </div>
                <div className="stat-label">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

