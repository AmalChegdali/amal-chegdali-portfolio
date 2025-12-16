import { useState, useEffect, useRef } from 'react';

/**
 * Hook personnalisé pour gérer le compteur de projets
 * @param {number} totalProjects - Nombre total de projets
 * @param {number} intervalDelay - Délai entre chaque incrément (en ms)
 * @returns {Object} - { count, sectionRef }
 */
export const useProjectCounter = (totalProjects = 17, intervalDelay = 400) => {
  const [count, setCount] = useState(0);
  const sectionRef = useRef(null);
  const intervalRef = useRef(null);
  const hasStartedRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || hasStartedRef.current) return;

      const sectionPosition = sectionRef.current.getBoundingClientRect();
      const isVisible = sectionPosition.top >= 0 && sectionPosition.bottom <= window.innerHeight;

      if (isVisible) {
        hasStartedRef.current = true;
        startProgress();
      }
    };

    const startProgress = () => {
      intervalRef.current = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount < totalProjects) {
            return prevCount + 1;
          } else {
            if (intervalRef.current) {
              clearInterval(intervalRef.current);
            }
            return prevCount;
          }
        });
      }, intervalDelay);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Vérifier immédiatement si la section est déjà visible
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [totalProjects, intervalDelay]);

  return { count, sectionRef };
};

