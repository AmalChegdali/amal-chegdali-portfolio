import './App.css';
import './styles/education.css';
import './styles/stats.css';
import './styles/scroll-progress.css';
import './styles/services.css';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ContactUs } from './Contact';
import WelcomePage from './WelcomePage';
import SkillsComponent from './components/SkillsComponent';
import SoftSkillsComponent from './components/SoftSkillsComponent';
import Header from './components/Header';
import Hero from './components/Hero';
import Profile from './components/Profile';
import ScrollToTop from './components/ScrollToTop';
import ScrollProgress from './components/ScrollProgress';
import GitHubProjects from './components/GitHubProjects';
import Stats from './components/Stats';
import LinkedInSection from './components/LinkedInSection';
import Services from './components/Services';
import { SECTION_IDS } from './constants';
   
function App() {
     const [showWelcome, setShowWelcome] = useState(true);
  const { t, i18n } = useTranslation();
   
     const handleEnterClick = () => {
       setShowWelcome(false);
     };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  if (showWelcome) {
    return <WelcomePage onEnter={handleEnterClick} />;
  }

  return (
    <div className="App">
      <ScrollProgress />
      <div id={SECTION_IDS.WELCOME}>
        <Header onLanguageChange={changeLanguage} />
        <Hero />
        <Stats />
        <Profile />
        
        {/* Education Section */}
        <section
          id={SECTION_IDS.EDUCATION}
          className="education"
          style={{
            zIndex: 2,
            color: 'white',
            position: 'relative',
            backgroundColor: "#f9fbfd"
          }}
        >
          <div className="section-heading text-center fade-in">
            <h2 className="gradient-text">Education</h2>
    </div>
    <div className="container">
      <div className="education-horizontal-timeline">
        <div className="row">
          <div className="col-sm-4">
            <div className="single-horizontal-timeline">
              <div className="experience-time">
                <h2>Oct 2021 - Juin 2023</h2>
                <h3>{t('Deust en MIP, FST')}</h3>
              </div>
              <div className="timeline-horizontal-border">
                <i className="fa fa-circle" aria-hidden="true"></i>
                <span className="single-timeline-horizontal"></span>
              </div>
              <div className="timeline">
                <div className="timeline-content">
                  <h4 className="title">FACULTÉ DES SCIENCES ET TECHNIQUES TANGER</h4>
                  <h5>Tanger, Maroc</h5>
                  <p className="description">{t('Diplome1')}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="single-horizontal-timeline">
              <div className="experience-time">
                <h2>Sep 2023 - 2024</h2>
                <h3>{t('Licence en Génie Informatique, FST')}</h3>
              </div>
              <div className="timeline-horizontal-border">
                <i className="fa fa-circle" aria-hidden="true"></i>
                <span className="single-timeline-horizontal"></span>
              </div>
              <div className="timeline">
                <div className="timeline-content">
                  <h4 className="title">FACULTÉ DES SCIENCES ET TECHNIQUES TANGER</h4>
                  <h5>Tanger, Maroc</h5>
                  <p className="description">{t('Diplome2')}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="single-horizontal-timeline">
              <div className="experience-time">
                <h2>Sep 2024 - Sep 2026</h2>
                <h3>{t('Encours')}</h3>
              </div>
              <div className="timeline-horizontal-border">
                <i className="fa fa-circle" aria-hidden="true"></i>
                <span className="single-timeline-horizontal spacial-horizontal-line"></span>
              </div>
              <div className="timeline">
                <div className="timeline-content">
                  <h4 className="title">ÉCOLE MAROCAINE DE L'INGÉNIEUR (EMSI)</h4>
                  <h5>Tanger, Maroc</h5>
                  <p className="description">{t('Diplome3')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

        {/* Skills Section */}
        <section
          id={SECTION_IDS.SKILLS}
          className="skills"
          style={{
            zIndex: 2,
            position: 'relative',
            backgroundColor: "#f9fbfd"
          }}
        >
          <div className="section-heading text-center fade-in">
            <h2 className="gradient-text">{t('Compétences')}</h2>
          </div>
          <SkillsComponent />
  </section>
 
        {/* Soft Skills Section */}
        <SoftSkillsComponent />
 
        {/* Experience Section */}
        <section
          id={SECTION_IDS.EXPERIENCE}
          className="experience"
          style={{
            textAlign: 'justify',
            zIndex: 2,
            color: 'white',
            position: 'relative',
            backgroundColor: "#f9fbfd"
          }}
        >
          <div className="section-heading text-center fade-in">
            <h2 className="gradient-text">{t('Expérience')}</h2>
    </div>
    <div className="container">
      <div className="experience-content">
          <div className="main-timeline">
            <ul>
              <li>
                <div className="single-timeline-box fix">
                  <div className="row">
                    <div className="col-md-5">
                      <div className="experience-time text-right">
                        <h2>{t('experience.date.june.sep.2025')}</h2>
                        <h3>{t('experience.project.final.year')}</h3>
                      </div>
                    </div>
                    <div className="col-md-offset-1 col-md-5">
                      <div className="timeline">
                        <div className="timeline-content">
                          <h4 className="title">
                            <span><i className="fa fa-circle" aria-hidden="true"></i></span>
                            UH2C-Research Maroc | ALEXSYS SOLUTIONS RABAT
                          </h4>
                          <h5>{t('experience.school')} : EMSI Tanger | {t('experience.company')} : ALEXSYS SOLUTIONS RABAT</h5>
                          <p className="description">{t('ProjetPFELicence')}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="single-timeline-box fix">
                  <div className="row">
                    <div className="col-md-5">
                      <div className="experience-time text-right">
                        <h2>{t('experience.date.march.june.2024')}</h2>
                        <h3>{t('experience.project.final.study')}</h3>
                      </div>
                    </div>
                    <div className="col-md-offset-1 col-md-5">
                      <div className="timeline">
                        <div className="timeline-content">
                          <h4 className="title">
                            <span><i className="fa fa-circle" aria-hidden="true"></i></span>
                            Ekram | ALEXSYS SOLUTIONS RABAT
                          </h4>
                          <h5>{t('experience.school')} : FST Tanger | {t('experience.company')} : ALEXSYS SOLUTIONS RABAT</h5>
                          <p className="description">{t('experience.project.ekram.description')}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
    </div>
  </section>

        {/* Services Section */}
        <Services />

        {/* Portfolio Section */}
        <section
          id={SECTION_IDS.PORTFOLIO}
          className="portfolio"
          style={{
            zIndex: 2,
            color: 'white',
            position: 'relative',
            backgroundColor: "#f9fbfd",
            padding: '100px 0'
          }}
        >
    <div className="portfolio-details"> 
            <div className="section-heading text-center fade-in">
              <h2 className="gradient-text">{t('Projet')}</h2>
      </div>
            <div className="container">
              <GitHubProjects />
            </div>
          </div>
  </section>
 
            {/* LinkedIn Section */}
            <LinkedInSection />
     
            {/* Contact Section */}
        <section
          id={SECTION_IDS.CONTACT}
          className="contact"
          style={{
            textAlign: 'justify',
            zIndex: 2,
            color: 'white',
            position: 'relative'
          }}
        >
          <div className="section-heading text-center fade-in">
            <h2 className="gradient-text">{t('Contactez - Moi')}</h2>
    </div>
          <div className="container">
            <div className="contact-content">
              <div className="row">
                <div className="col-md-offset-1 col-md-5 col-sm-6">
                  <div className="single-contact-box">
                    <div className="contact-form">
                      <ContactUs />
              </div>
            </div>
          </div>
                <div className="col-md-offset-1 col-md-5 col-sm-6">
                  <div className="single-contact-box">
                    <div className="contact-adress">
                      <div className="contact-add-head">
                  <h3>Amal Chegdali</h3>
                  <p>{t('Etudiante')}, EMSI.</p>
                </div>
                      <div className="contact-add-info">
                        <div className="single-contact-add-info">
                    <h3>{t('Number')} :</h3>
                    <p>+212-625-081-064.</p>
                  </div>
                        <div className="single-contact-add-info">
                    <h3>Email : </h3>
                    <p><a href="mailto:a.chegdali01@gmail.com">a.chegdali01@gmail.com</a></p>
                  </div>
                </div>
              </div>
                    <div className="hm-foot-icon">
                <ul>
                        <li>
                          <a href="https://x.com/A86276Amal" aria-label="Twitter">
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://github.com/AmalChegdali" aria-label="GitHub">
                            <i className="fab fa-github" aria-hidden="true"></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.linkedin.com/in/amal-chegdali-37a5b9239/" aria-label="LinkedIn">
                            <i className="fab fa-linkedin"></i>
                          </a>
                        </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</section>

        {/* Footer */}
        <footer
          id="footer-copyright"
          className="footer-copyright"
          style={{ zIndex: 2, position: 'relative' }}
        >
          <div className="container">
            <div className="hm-footer-copyright text-center">
        <p>
                &copy; copyright{' '}
                <a href="#about">
                  <span style={{ fontWeight: "bold" }}>AmalChegdali</span>
                </a>{' '}
                - {t('Etudiante')}.
        </p>
      </div>
    </div>
          <ScrollToTop />
      </footer>
      </div>
      </div>
    );
}

export default App;
