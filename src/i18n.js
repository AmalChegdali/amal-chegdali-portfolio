import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// import en from './locales/en/translation.json';
import fr from './locales/fr/translation.json';
import en from './locales/en/translation.json';

i18n
  .use(LanguageDetector) // Détecte la langue du navigateur de l'utilisateur
  .use(initReactI18next) // Connecte i18next avec React
  .init({
    // debug: true,
    // lng: "fr",  // La langue par défaut
    resources: {
      fr: {
        translation: fr,  // Ceci est correct, il faut directement utiliser le contenu des fichiers JSON
      },
      en: {
        translation: en,  // Même correction pour l'anglais
      },
    },
    lng:'fr',
    fallbackLng:'fr',
  });

export default i18n; // Exporter la configuration i18next
