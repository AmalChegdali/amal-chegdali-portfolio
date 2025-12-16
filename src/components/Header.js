import React from 'react';
import { useTranslation } from 'react-i18next';
import Logo from './Logo';
import DarkModeToggle from './DarkModeToggle';
import '../styles/dark-mode.css';

const Header = ({ onLanguageChange }) => {
  const { t, i18n } = useTranslation();

  const menuItems = [
    { href: '#profiles', label: 'Profile' },
    { href: '#education', label: 'Education' },
    { href: '#skills', label: t('Compétences') },
    { href: '#experience', label: t('Expérience') },
    { href: '#portfolio', label: t('Projet') },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="top-area">
      <DarkModeToggle />
      <div className="header-area">
        <nav className="navbar navbar-default bootsnav navbar-fixed dark no-background">
          <div className="container">
            <div className="navbar-header">
              <button 
                type="button" 
                className="navbar-toggle" 
                data-toggle="collapse" 
                data-target="#navbar-menu"
                aria-label="Toggle navigation"
              >
                <i className="fa fa-bars"></i>
              </button>
              <a className="navbar-brand" href="#Welcome">
                <Logo className="ImageLogo" size={65} />
              </a>
            </div>

            <div className="collapse navbar-collapse menu-ui-design" id="navbar-menu">
              <ul className="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
                <li className="smooth-menu active"></li>
                {menuItems.map((item, index) => (
                  <li key={index} className="smooth-menu">
                    <a href={item.href}>
                      <span style={{ fontWeight: "bold" }}>{item.label}</span>
                    </a>
                  </li>
                ))}
                <li style={{ paddingTop: "2%" }}>
                  <button
                    className="language-btn"
                    onClick={() => {
                      const newLang = i18n.language === 'fr' ? 'en' : 'fr';
                      onLanguageChange(newLang);
                    }}
                    aria-label="Switch language"
                  >
                    <i className="fa fa-globe" style={{ marginRight: '5px' }}></i>
                    {i18n.language === 'fr' ? 'En' : 'Fr'}
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className="clearfix"></div>
    </header>
  );
};

export default Header;

