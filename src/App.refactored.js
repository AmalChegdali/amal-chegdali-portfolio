import './App.css';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ContactUs } from './Contact';
import WelcomePage from './WelcomePage';
import SkillsComponent from './SkillsComponent';
import Header from './components/Header';
import Hero from './components/Hero';
import Profile from './components/Profile';
import ScrollToTop from './components/ScrollToTop';
import { useProjectCounter } from './hooks/useProjectCounter';
import { TOTAL_PROJECTS, SECTION_IDS } from './constants';

function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const { t, i18n } = useTranslation();
  const { count: projectsCount, sectionRef } = useProjectCounter(TOTAL_PROJECTS);

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
      <div id={SECTION_IDS.WELCOME}>
        <Header onLanguageChange={changeLanguage} />
        <Hero />
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
                      <h2>{t('oct 2021 - juin 2023')}</h2>
                      <h3>{t('Deust en MIP, FST')}.</h3>
                    </div>
                    <div className="timeline-horizontal-border">
                      <i className="fa fa-circle" aria-hidden="true"></i>
                      <span className="single-timeline-horizontal"></span>
                    </div>
                    <div className="timeline">
                      <div className="timeline-content">
                        <h4 className="title">{t('Faculté des Sciences et Techniques')}</h4>
                        <h5>{t('Tanger-Tétouan-Al Hoceima, Maroc')}</h5>
                        <p className="description">{t('Diplome1')}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="single-horizontal-timeline">
                    <div className="experience-time">
                      <h2>sep 2023 - 2024</h2>
                      <h3>{t('Licence en Génie Informatique, FST')}.</h3>
                    </div>
                    <div className="timeline-horizontal-border">
                      <i className="fa fa-circle" aria-hidden="true"></i>
                      <span className="single-timeline-horizontal"></span>
                    </div>
                    <div className="timeline">
                      <div className="timeline-content">
                        <h4 className="title">{t('Faculté des Sciences et Techniques')}</h4>
                        <h5>{t('Tanger-Tétouan-Al Hoceima, Maroc')}</h5>
                        <p className="description">{t('Diplome2')}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="single-horizontal-timeline">
                    <div className="experience-time">
                      <h2>sep 2024 - sep 2026</h2>
                      <h3>{t('Encours')}.</h3>
                    </div>
                    <div className="timeline-horizontal-border">
                      <i className="fa fa-circle" aria-hidden="true"></i>
                      <span className="single-timeline-horizontal spacial-horizontal-line"></span>
                    </div>
                    <div className="timeline">
                      <div className="timeline-content">
                        <h4 className="title">{t('EMSI')}</h4>
                        <h5>{t('Tanger-Tétouan-Al Hoceima, Maroc')}</h5>
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
            textAlign: 'justify',
            zIndex: 2,
            position: 'relative',
            backgroundColor: "#f9fbfd"
          }}
        >
          <div className="skill-content">
            <div className="section-heading text-center fade-in">
              <h2 className="gradient-text">{t('Compétences')}</h2>
            </div>
            <section style={{ position: 'relative', backgroundColor: "#f9fbfd" }}>
              <div style={{ position: 'relative', backgroundColor: "#f9fbfd" }}>
                <SkillsComponent />
              </div>
            </section>
            {/* Progress bars section - keeping existing code for now */}
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="single-skill-content">
                    <div className="barWrapper">
                      <span className="progressText">.Net FrameWork</span>
                      <div className="single-progress-txt">
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            aria-valuenow="80"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{
                              width: "80%",
                              height: "100%",
                              backgroundColor: "#427fc4",
                              transition: "width 0.5s ease-in-out"
                            }}
                          ></div>
                        </div>
                        <h3>80%</h3>
                      </div>
                    </div>
                    <div className="barWrapper">
                      <span className="progressText">Python Django</span>
                      <div className="single-progress-txt">
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            aria-valuenow="85"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{
                              width: "85%",
                              height: "100%",
                              backgroundColor: "#427fc4",
                              transition: "width 0.5s ease-in-out"
                            }}
                          ></div>
                        </div>
                        <h3>85%</h3>
                      </div>
                    </div>
                    <div className="barWrapper">
                      <span className="progressText">Flutter FrameWork</span>
                      <div className="single-progress-txt">
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            aria-valuenow="92"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{
                              width: "92%",
                              height: "100%",
                              backgroundColor: "#427fc4",
                              transition: "width 0.5s ease-in-out"
                            }}
                          ></div>
                        </div>
                        <h3>92%</h3>
                      </div>
                    </div>
                    <div className="barWrapper">
                      <span className="progressText">NoSql/SQL</span>
                      <div className="single-progress-txt">
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            aria-valuenow="90"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{
                              width: "92%",
                              height: "100%",
                              backgroundColor: "#427fc4",
                              transition: "width 0.5s ease-in-out"
                            }}
                          ></div>
                        </div>
                        <h3>90%</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="single-skill-content">
                    <div className="barWrapper">
                      <span className="progressText">html 5_Css_Js</span>
                      <div className="single-progress-txt">
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            aria-valuenow="95"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{
                              width: "95%",
                              height: "100%",
                              backgroundColor: "#427fc4",
                              transition: "width 0.5s ease-in-out"
                            }}
                          ></div>
                        </div>
                        <h3>95%</h3>
                      </div>
                    </div>
                    <div className="barWrapper">
                      <span className="progressText">{t('Etude de Cas')}</span>
                      <div className="single-progress-txt">
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            aria-valuenow="85"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{
                              width: "85%",
                              height: "100%",
                              backgroundColor: "#427fc4",
                              transition: "width 0.5s ease-in-out"
                            }}
                          ></div>
                        </div>
                        <h3>85%</h3>
                      </div>
                    </div>
                    <div className="barWrapper">
                      <span className="progressText">communication</span>
                      <div className="single-progress-txt">
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            aria-valuenow="97"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{
                              width: "97%",
                              height: "100%",
                              backgroundColor: "#427fc4",
                              transition: "width 0.5s ease-in-out"
                            }}
                          ></div>
                        </div>
                        <h3>97%</h3>
                      </div>
                    </div>
                    <div className="barWrapper">
                      <span className="progressText">React</span>
                      <div className="single-progress-txt">
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            aria-valuenow="79"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{
                              width: "79%",
                              height: "100%",
                              backgroundColor: "#427fc4",
                              transition: "width 0.5s ease-in-out"
                            }}
                          ></div>
                        </div>
                        <h3>79%</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

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
                            <h2>2024 - {t('Stage PFE')}</h2>
                            <h3>{t('Stagaire Développement')}</h3>
                          </div>
                        </div>
                        <div className="col-md-offset-1 col-md-5">
                          <div className="timeline">
                            <div className="timeline-content">
                              <h4 className="title">
                                <span><i className="fa fa-circle" aria-hidden="true"></i></span>
                                Alexsys Solutions
                              </h4>
                              <h5>{t('Rabat, Rabat-Salé-Kénitra, Maroc')}.</h5>
                              <p className="description">{t('ProjetPFELicence')}</p>
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

        {/* Portfolio Section */}
        <section
          id={SECTION_IDS.PORTFOLIO}
          className="portfolio"
          style={{
            zIndex: 2,
            color: 'white',
            position: 'relative',
            backgroundColor: "#f9fbfd"
          }}
        >
          <div className="portfolio-details">
            <div className="section-heading text-center fade-in">
              <h2 className="gradient-text">{t('Projet')}</h2>
            </div>
            <div className="container">
              <div className="portfolio-content">
                <div className="isotope">
                  <div className="row">
                    <div className="col-sm-4">
                      <div className="item">
                        <img src="images/about/projet1.png" alt="portfolio" />
                        <div className="isotope-overlay">
                          <a href="https://github.com/Amal23-Hub/ApplicationWeb-en-Django.git">
                            {t('Application Web en Django')}
                          </a>
                        </div>
                      </div>
                      <div className="item">
                        <img src="images/portfolio/classroomDjango.png" alt="portfolio" />
                        <div className="isotope-overlay">
                          <a href="https://github.com/Amal23-Hub/ClassroomProject.git">
                            <span>Classroom Project</span>
                          </a>
                        </div>
                      </div>
                      <div className="item">
                        <img src="images/portfolio/Certificat_React.png" alt="portfolio" />
                        <div className="isotope-overlay">
                          <a href="https://www.coursera.org/account/accomplishments/records/HLZU18TCEDH2">
                            <span>Certification React</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="item">
                        <img src="images/portfolio/App_ekram.png" alt="portfolio" />
                        <div className="isotope-overlay">
                          <a href="https://github.com/Amal23-Hub/ekramMobile.git">
                            ekram Application Mobile
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="item">
                        <img src="images/about/projet1.png" alt="portfolio" />
                        <div className="isotope-overlay">
                          <a href="https://github.com/Amal23-Hub/SiteUniversitaire.git">
                            Site Web {t('Universitaire')}
                          </a>
                        </div>
                      </div>
                      <div className="item">
                        <img src="images/portfolio/Certificat_Postmen.png" alt="portfolio" />
                        <div className="isotope-overlay">
                          <a href="https://github.com/Amal23-Hub/Certification-Postmen.git">
                            Certification Postmen
                          </a>
                        </div>
                      </div>
                      <div style={styles.container} className="fade-in">
                        <h2 style={{ color: '#2c3e50', marginBottom: '20px' }}>
                          {t('Projets réalisés')}
                        </h2>
                        <div style={{ marginLeft: '25%' }} className="projectsCount">
                          <h2 style={styles.number}>+{projectsCount}</h2>
                          <div ref={sectionRef} style={styles.progressContainer}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

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
                          <p>chegdali.amal@etu.uae.ac.ma.</p>
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
                          <a href="https://github.com/Amal23-Hub" aria-label="GitHub">
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

// Styles constants
const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
    fontFamily: "'Poppins', sans-serif",
  },
  progressContainer: {
    marginTop: '200px',
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#667eea',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  number: {
    fontSize: '64px',
    color: 'white',
    fontWeight: 800,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '180px',
    height: '120px',
    borderRadius: '60px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    boxShadow: '0 10px 30px rgba(102, 126, 234, 0.4)',
    transition: 'all 0.3s ease',
  },
};

export default App;

