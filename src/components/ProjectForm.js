import React, { useState } from 'react';
import { validateProjectName } from '../utils/validateProjectName'; // Importer la fonction de validation

const ProjectForm = () => {
  const [projectName, setProjectName] = useState(""); // État pour le nom du projet
  const [error, setError] = useState(""); // État pour l'erreur

  const handleSubmit = (e) => {
    e.preventDefault(); // Empêcher le comportement par défaut du formulaire

    // Appeler la fonction de validation
    if (validateProjectName(projectName)) {
      setError(""); // Réinitialiser l'erreur si le nom est valide
      console.log("Nom du projet valide, soumission réussie !");
      // Vous pouvez soumettre le formulaire ou effectuer d'autres actions
    } else {
      setError("Nom de projet invalide. Il doit respecter les règles.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="projectName">Nom du projet :</label>
        <input
          type="text"
          id="projectName"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)} // Mettre à jour l'état
          placeholder="Entrez le nom du projet"
        />
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Afficher l'erreur */}
      <button type="submit">Soumettre</button>
    </form>
  );
};

export default ProjectForm;
