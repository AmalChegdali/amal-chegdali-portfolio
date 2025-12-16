// Fonction pour valider le nom du projet
export function validateProjectName(projectName) {
    const regex = /^(?!.*--)[a-z0-9._-]{1,100}$/;
    return regex.test(projectName);
  }
  