import { useTranslation } from 'react-i18next';
import React from 'react';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();  // Utiliser i18n à partir de react-i18next
  const languages = [
    { code: 'en', lang: 'English' },
    { code: 'fr', lang: ' French' },
  ];

  const handleLanguageChange = (code) => {
    i18n.changeLanguage(code);  // Change la langue en fonction du code
  };

  return (
    <div className='btn-container'>
      {languages.map((lng) => (
        <button key={lng.code} onClick={() => handleLanguageChange(lng.code)}>
          {lng.lang}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
