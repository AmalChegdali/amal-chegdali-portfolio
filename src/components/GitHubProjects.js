import React, { useState, useEffect } from 'react';
import '../styles/github-projects.css';

// Liste de projets statique en cas d'échec de l'API
// Prioriser ekram et Power BI
const FALLBACK_PROJECTS = [
  {
    id: 1,
    name: 'ekramMobile',
    description: 'Application mobile multiplateforme développée avec Flutter pour la gestion des déclarations de décès',
    url: 'https://github.com/AmalChegdali/ekramMobile',
    language: 'Dart',
    stars: 0,
    updated: '2024',
    topics: ['flutter', 'dart', 'mobile', 'ekram']
  },
  {
    id: 2,
    name: 'Power-BI',
    description: 'Projets de Business Intelligence avec Power BI - Dashboards et visualisations de données',
    url: 'https://github.com/AmalChegdali',
    language: 'Power BI',
    stars: 0,
    updated: '2024',
    topics: ['power-bi', 'business-intelligence', 'data-visualization', 'dashboards']
  },
  {
    id: 3,
    name: 'ApplicationWeb-en-Django',
    description: 'Application Web développée avec le framework Django',
    url: 'https://github.com/AmalChegdali/ApplicationWeb-en-Django',
    language: 'Python',
    stars: 0,
    updated: '2024',
    topics: ['django', 'python', 'web']
  }
];

const GitHubProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // Utiliser un proxy CORS ou l'API GitHub directement
        const response = await fetch('https://api.github.com/users/AmalChegdali/repos?sort=updated&per_page=100', {
          method: 'GET',
          headers: {
            'Accept': 'application/vnd.github.v3+json',
          },
        });

        if (!response.ok) {
          // Si l'API échoue, utiliser les projets statiques (limiter à 3)
          console.warn('GitHub API failed, using fallback projects');
          setProjects(FALLBACK_PROJECTS.slice(0, 3));
          setLoading(false);
          return;
        }

        const data = await response.json();
        
        // Filtrer et formater les projets
        // Exclure les projets indésirables
        const excludedProjects = ['Portfolio', 'MyPortfolio-main', 'AmalChegdali', 'Docker-Jenkins'];
        const preferredProjects = ['ekramMobile', 'ekram', 'Power-BI', 'power-bi', 'PowerBI', 'powerbi'];
        
        // Filtrer les projets
        let filteredProjects = data.filter(repo => 
          !repo.fork && !excludedProjects.includes(repo.name)
        );
        
        // Séparer les projets préférés des autres
        const preferred = filteredProjects.filter(repo => 
          preferredProjects.some(pref => repo.name.toLowerCase().includes(pref.toLowerCase()))
        );
        
        const others = filteredProjects.filter(repo => 
          !preferredProjects.some(pref => repo.name.toLowerCase().includes(pref.toLowerCase()))
        );
        
        // Trier les projets préférés par date de mise à jour
        preferred.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
        
        // Trier les autres projets par date de mise à jour
        others.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
        
        // Combiner : projets préférés en premier, puis les autres
        const sortedProjects = [...preferred, ...others];
        
        const formattedProjects = sortedProjects
          .slice(0, 3) // Limiter à 3 projets
          .map(repo => ({
            id: repo.id,
            name: repo.name,
            description: repo.description || 'Aucune description disponible',
            url: repo.html_url,
            language: repo.language || 'Autre',
            stars: repo.stargazers_count,
            updated: new Date(repo.updated_at).toLocaleDateString('fr-FR'),
            topics: repo.topics || []
          }));
        
        if (formattedProjects.length === 0) {
          // Si aucun projet trouvé, utiliser les projets statiques (limiter à 3)
          setProjects(FALLBACK_PROJECTS.slice(0, 3));
        } else {
          setProjects(formattedProjects);
        }
        setLoading(false);
      } catch (err) {
        console.error('Error fetching projects:', err);
        // En cas d'erreur, utiliser les projets statiques (limiter à 3)
        setProjects(FALLBACK_PROJECTS.slice(0, 3));
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="projects-loading">
        <div className="loader"></div>
        <p>Chargement des projets depuis GitHub...</p>
      </div>
    );
  }

  if (projects.length === 0) {
    return (
      <div className="projects-error">
        <p>Aucun projet trouvé.</p>
        <a
          href="https://github.com/AmalChegdali"
          target="_blank"
          rel="noopener noreferrer"
          className="view-all-projects-btn"
        >
          Voir tous les projets sur GitHub
          <i className="fa fa-arrow-right"></i>
        </a>
      </div>
    );
  }

  return (
    <div className="github-projects-container">
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-header">
              <h3 className="project-title">{project.name}</h3>
              <span className="project-language">{project.language}</span>
            </div>
            <p className="project-description">{project.description}</p>
            <div className="project-footer">
              <div className="project-meta">
                {project.stars > 0 && (
                  <span className="project-stars">
                    <i className="fa fa-star"></i> {project.stars}
                  </span>
                )}
                <span className="project-updated">Mis à jour: {project.updated}</span>
              </div>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                Voir sur GitHub <i className="fa fa-external-link"></i>
              </a>
            </div>
            {project.topics && project.topics.length > 0 && (
              <div className="project-topics">
                {project.topics.slice(0, 5).map((topic, index) => (
                  <span key={index} className="project-topic">{topic}</span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="projects-footer">
        <a
          href="https://github.com/AmalChegdali"
          target="_blank"
          rel="noopener noreferrer"
          className="view-all-projects-btn"
        >
          Voir tous les projets sur GitHub
          <i className="fa fa-arrow-right"></i>
        </a>
      </div>
    </div>
  );
};

export default GitHubProjects;

