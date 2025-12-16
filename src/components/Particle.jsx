import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesComponent = (props) => {

  // Déstructuration correcte de useState
  const [init, setInit] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return document.body.classList.contains('dark-mode');
  });

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      // Mise à jour de l'état avec setInit
      setInit(true);
    });
  }, []);

  // Observer les changements de mode sombre
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDarkMode(document.body.classList.contains('dark-mode'));
    });

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => {
      return {
      background: {
        color: {
            value: isDarkMode ? "#2d2d2d" : "#427fc4",
        },
      },
      fpsLimit: 140,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "repulse",
          },
          onHover: {
            enable: true,
            mode: 'grab',
          },
        },
        modes: {
          push: {
            distance: 200,
            duration: 18,
          },
          grab: {
            distance: 150,
          },
        },
      },
      particles: {
        color: {
            value: isDarkMode ? "#5a9fd4" : "#f9fbfd",
        },
        links: {
            color: isDarkMode ? "#5a9fd4" : "#f9fbfd",
          distance: 150,
          enable: true,
            opacity: isDarkMode ? 0.4 : 0.8,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 2,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 150,
        },
        opacity: {
          value: isDarkMode ? 0.6 : 1.0,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 4 },
        },
      },
      detectRetina: true,
    };
    },
    [isDarkMode],
  );

  if (!init) return null;

  return <Particles id={props.id} key={isDarkMode ? 'dark' : 'light'} loaded={particlesLoaded} options={options} />;
};

export default ParticlesComponent;
