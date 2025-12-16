import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Logo from './Logo';
import DarkModeToggle from './DarkModeToggle';
import '../styles/dark-mode.css';
import '../styles/header-mobile.css';

const Header = ({ onLanguageChange }) => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { href: '#profiles', label: 'Profile' },
    { href: '#education', label: 'Education' },
    { href: '#skills', label: t('Compétences') },
    { href: '#experience', label: t('Expérience') },
    { href: '#services', label: t('services.title') || 'Services' },
    { href: '#portfolio', label: t('Projet') },
    { href: '#contact', label: 'Contact' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    const menu = document.getElementById('navbar-menu');
    if (menu) {
      menu.classList.toggle('show');
      menu.classList.toggle('in');
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    const menu = document.getElementById('navbar-menu');
    if (menu) {
      menu.classList.remove('show');
      menu.classList.remove('in');
    }
  };

  // Close menu when clicking on a link
  useEffect(() => {
    const links = document.querySelectorAll('#navbar-menu a');
    links.forEach(link => {
      link.addEventListener('click', closeMenu);
    });
    return () => {
      links.forEach(link => {
        link.removeEventListener('click', closeMenu);
      });
    };
  }, []);

  return (
    <header className="top-area">
      <DarkModeToggle />
      <div className="header-area">
        <nav className="navbar navbar-default bootsnav navbar-fixed dark no-background">
          <div className="container">
            <div className="navbar-header">
              <button 
                type="button" 
                className={`navbar-toggle ${isMenuOpen ? 'active' : ''}`}
                onClick={toggleMenu}
                aria-label="Toggle navigation"
                aria-expanded={isMenuOpen}
              >
                <i className={`fa ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
              </button>
              <a className="navbar-brand" href="#Welcome" onClick={closeMenu}>
                <Logo className="ImageLogo" size={65} />
              </a>
            </div>

            <div className={`collapse navbar-collapse menu-ui-design ${isMenuOpen ? 'show in' : ''}`} id="navbar-menu">
              <ul className="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
                <li className="smooth-menu active"></li>
                {menuItems.map((item, index) => (
                  <li key={index} className="smooth-menu">
                    <a href={item.href} onClick={closeMenu}>
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

