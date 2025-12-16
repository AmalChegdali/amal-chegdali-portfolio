# Portfolio - Amal Chegdali

Portfolio personnel moderne et responsive développé avec React, présentant mes compétences, projets et expériences en développement web et DevOps.

## 🚀 Technologies Utilisées

- **React 19** - Bibliothèque JavaScript pour l'interface utilisateur
- **React i18next** - Internationalisation (Français/Anglais)
- **TSParticles** - Animations de particules interactives
- **AOS (Animate On Scroll)** - Animations au défilement
- **EmailJS** - Envoi d'emails depuis le formulaire de contact
- **SweetAlert2** - Notifications modernes
- **Bootstrap** - Framework CSS responsive

## 📋 Fonctionnalités

- ✨ **Page de chargement animée** avec effets visuels modernes
- 🌐 **Multilingue** (Français/Anglais) avec sélecteur de langue
- 📱 **Design responsive** adapté à tous les écrans
- 🎨 **Animations fluides** et transitions modernes
- 📧 **Formulaire de contact** fonctionnel avec EmailJS
- 🔗 **Intégration GitHub** pour afficher automatiquement les projets
- 🎯 **Sections** : Profil, Formation, Compétences, Expérience, Projets, Contact

## 🛠️ Installation

### Prérequis

- Node.js (version 14 ou supérieure)
- npm ou yarn

### Installation des dépendances

```bash
# Avec npm
npm install

# Ou avec yarn
yarn install
```

## 🚀 Lancement du projet

### Mode développement

```bash
# Avec npm
npm start

# Ou avec yarn
yarn start
```

Le projet s'ouvrira automatiquement dans votre navigateur à l'adresse [http://localhost:3000](http://localhost:3000)

### Build de production

```bash
# Avec npm
npm run build

# Ou avec yarn
yarn build
```

Le build de production sera créé dans le dossier `build/`.

## 📁 Structure du Projet

```
src/
├── components/          # Composants React réutilisables
│   ├── Header.js       # Navigation principale
│   ├── Hero.js         # Section hero avec particules
│   ├── Profile.js      # Section profil
│   ├── Particle.jsx    # Composant particules animées
│   ├── GitHubProjects.js # Affichage des projets GitHub
│   └── ScrollToTop.js  # Bouton retour en haut
├── hooks/              # Hooks personnalisés
│   └── useProjectCounter.js
├── locales/            # Fichiers de traduction
│   ├── fr/            # Traductions françaises
│   └── en/            # Traductions anglaises
├── styles/             # Fichiers CSS supplémentaires
│   ├── education.css  # Styles pour la section éducation
│   └── github-projects.css # Styles pour les projets GitHub
├── App.js             # Composant principal
├── App.css            # Styles principaux
└── index.js           # Point d'entrée de l'application
```

## 🎨 Personnalisation

### Modifier les informations personnelles

Les informations sont gérées dans :
- `src/components/Profile.js` - Informations de profil
- `src/components/Hero.js` - Section hero
- `src/locales/fr/translation.json` - Traductions françaises
- `src/locales/en/translation.json` - Traductions anglaises

### Modifier les couleurs

Les couleurs principales du portfolio sont définies dans `src/App.css` et `public/css/style.css` :
- Bleu principal : `#427fc4`
- Bleu foncé : `#3681bd`
- Bleu clair : `#a2c1e4`

## 📝 Configuration EmailJS

Pour configurer le formulaire de contact, modifiez les identifiants dans `src/Contact.jsx` :
- `service_xaxq1nw` - ID du service
- `template_icytr1nw` - ID du template
- `RG4jT9v3ayVpKJ8PE` - Clé publique

## 🌐 Déploiement

Le projet peut être déployé sur :
- **Vercel** (recommandé)
- **Netlify**
- **GitHub Pages**
- Tout autre service d'hébergement statique

### Déploiement sur Vercel

```bash
npm install -g vercel
vercel
```

## 📄 Licence

Ce projet est sous licence personnelle.

## 👤 Auteur

**Amal Chegdali**
- GitHub: [@AmalChegdali](https://github.com/AmalChegdali)
- LinkedIn: [Amal Chegdali](https://www.linkedin.com/in/amal-chegdali-37a5b9239/)
- Email: a.chegdali01@gmail.com

## 🙏 Remerciements

- Template de base inspiré de Browny HTML Template
- Bibliothèques open-source utilisées dans le projet
