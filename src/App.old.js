import './App.css';
import React, { useState , useEffect, useRef} from 'react';
import { ContactUs } from './Contact';
import ParticlesComponent from './components/Particle';
import './i18n';
import { useTranslation } from 'react-i18next';  
import WelcomePage from './WelcomePage';
import SkillsComponent from './SkillsComponent';

   
function App() {


  
     const [showWelcome, setShowWelcome] = useState(true);
   
     const handleEnterClick = () => {
       setShowWelcome(false);
     };


  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [subject, setSubject] = useState('');
  // const [message, setMessage] = useState('');
  // const [responseMessage, setResponseMessage] = useState('');

  const [projectsCount, setProjectsCount] = useState(0); // Nombre de projets
  const totalProjects = 17; // Nombre total de projets réalisés
  const sectionRef = useRef(null); // Référence de la section

  useEffect(() => {
    // Fonction pour vérifier si la section est dans la vue de l'utilisateur
    const handleScroll = () => {
      const sectionPosition = sectionRef.current.getBoundingClientRect();
      if (sectionPosition.top >= 0 && sectionPosition.bottom <= window.innerHeight) {
        startProgress(); // Lance la progression si la section est visible
      }
    };

    // Fonction pour augmenter le nombre de projets
    const startProgress = () => {
      const interval = setInterval(() => {
        setProjectsCount(prevCount => {
          if (prevCount < totalProjects) {
            return prevCount + 1; // Augmente le nombre de 1
          } else {
            clearInterval(interval); // Arrêter l'intervalle une fois le total atteint
            return prevCount;
          }
        });
      }, 400); // Augmenter le nombre toutes les 100 ms
    };

    // Attacher l'événement de scroll
    window.addEventListener('scroll', handleScroll);

    // Nettoyer l'événement au démontage du composant
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


    // Fonction pour gérer le défilement fluide
    const scrollToTop = () => {
      const element = document.getElementById('Welcomme'); // Cibler l'élément par ID
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' }); // Défilement fluide
      }
    };

  const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);  // Cela doit maintenant fonctionner
    };

  return (
    <div className="App">
    {showWelcome ? (
      <WelcomePage onEnter={handleEnterClick} />
    ) : (
      <div id="Welcomme">
  <header className="top-area">
    <div className="header-area">
        <nav className="navbar navbar-default bootsnav navbar-fixed dark no-background">
            <div className="container">

                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                        <i className="fa fa-bars"></i>
                    </button>
                    <a className="navbar-brand" href="#Welcomme">
                    <img src="images/about/Amal.png" alt="logoAmal" className='ImageLogo'/>
                    </a> 
                    <div className='style'>
                      
                   </div>
                </div>
               
                <div className="collapse navbar-collapse menu-ui-design" id="navbar-menu">
                    <ul className="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
                    <li className=" smooth-menu active"></li>
                        <li className="smooth-menu"><a href="#profiles"><span style={{fontWeight:"bold"}}>Profile</span></a></li>
                        <li className="smooth-menu"><a href="#education"><span style={{fontWeight:"bold"}}>Education</span></a></li>
                        <li className="smooth-menu"><a href="#skills"><span style={{fontWeight:"bold"}}>{t('Compétences')}</span></a></li>
                        <li className="smooth-menu"><a href="#experience"><span style={{fontWeight:"bold"}}>{t('Expérience')}</span></a></li>
                        <li className="smooth-menu"><a href="#portfolio"><span style={{fontWeight:"bold"}}>{t('Projet')}</span></a></li>
                        <li className="smooth-menu"><a href="#contact"><span style={{fontWeight:"bold"}}>Contact</span></a></li>
                        <li style={{paddingTop : "2%"}}> 
                          {/* <select className='changeLanguage-btn' onChange={(e) => changeLanguage(e.target.value)}> 
                              <option value="fr">Français</option>
                              <option value="en">English</option> 
                          </select> */}
                          <div className="language-selector">
                          <button 
                              className="language-btn" 
                              onClick={() => changeLanguage("fr")}
                          >
                              <span className="flag-icon flag-icon-fr"></span> {/* Drapeau de la France */}
                          </button>
                            
                          <button 
                              className="language-btn" 
                              onClick={() => changeLanguage("en")}
                          >
                              <span className="flag-icon flag-icon-us"></span> {/* Drapeau des États-Unis */}
                          </button>
                      </div>

                       </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>

      <div className="clearfix"></div>

  </header>

  <section id="welcome-hero"> 

  <div style={{ position: 'relative', height: '890px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
  {/* Composant Particles pour remplacer l'image de fond */}
  <ParticlesComponent id="particles" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }} />
  
  {/* Votre contenu */}
  <div style={{ zIndex: 2, position: 'relative' }}>
  <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
        
           <div className="header-text">
            <h2>{t("greeting")}<span style={{color:"white"}}>,</span> {t("My")} <br/>Amal<br/> Chegdali <span style={{color:"white"}}>.</span></h2>
            <p>{t("Status")}</p>
            <a href="download/Amal Chegdali_CV.pdf" download>{t("Cv")}</a>
          </div>  
        </div>
      </div>
    </div>
  </div>
</div>
  </section>
  
  <section id="profiles" className="about" style={{ zIndex: 2, color: 'white', position: 'relative', backgroundColor : "#f9fbfd" }} >
    <div className="section-heading text-center">
      <h2>Profile</h2>
    </div>
    <div className="container">
      <div className="about-content">
        <div className="row">
          <div className="col-sm-6">
            <div className="single-about-txt">
              <h3>
                  {t("TitleStatus")}    </h3>
              <p>
                  {t("ProfilePrestantation")}
              </p>
              <div className="row">
                <div className="col-sm-4">
                  <div className="single-about-add-info">
                    <h3>{t("Number")}</h3>
                    <p>+212-625-081-064</p>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="single-about-add-info">
                    <h3>email</h3>
                    <p>chegdali.amal@etu.uae.ac.ma</p>
                  </div>
                </div>
                {/* <div className="col-sm-4">
                  <div className="single-about-add-info">
                    <h3>website</h3>
                    <p>www.brownsine.com</p>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          <div className="col-sm-offset-1 col-sm-5">
            <div className="single-about-img">
              <img src="images/about/profile_image.png" alt="profileimage"/>
              <div className="about-list-icon">
                <ul >
                  
                <li>
                     <a href="https://x.com/A86276Amal" aria-label="Twitter">
                       <i className="fab fa-twitter"></i>
                     </a>
                  </li>
                  
                  <li>
                    <a href="https://github.com/Amal23-Hub" className='iconhover' aria-label="GitHub">
                      <i className="fab fa-github" aria-hidden="true"></i>
                    </a>
                  </li>
                  
                  <li>
                    <a href="https://www.linkedin.com/in/amal-chegdali-37a5b9239/" aria-label="LinkedIn">
                      <i  className="fab fa-linkedin" aria-hidden="true"></i>
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
{/* 
  <section id="about" class="profiles" style={{ zIndex: 2, position: 'relative', backgroundColor : "#f9fbfd" }}>
    <div class="profiles-details">
      <div class="section-heading text-center">
        <h2>{t('SurMoi')}</h2>
      </div>
      <div class="container">
        <div class="profiles-content">
          <div class="row">
            <div class="col-sm-3">
              <div class="single-profile">
                <div class="profile-txt">
                  <a href="#"><i class="flaticon-themeforest"></i></a>
                  <div class="profile-icon-name">themeforest</div>
                </div>
                <div class="single-profile-overlay">
                  <div class="profile-txt">
                    <a href=""><i class="flaticon-themeforest"></i></a>
                    <div class="profile-icon-name">themeforest</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="single-profile">
                <div class="profile-txt">
                  <a href=""><i class="flaticon-dribbble"></i></a>
                  <div class="profile-icon-name">dribbble</div>
                </div>
                <div class="single-profile-overlay">
                  <div class="profile-txt">
                    <a href=""><i class="flaticon-dribbble"></i></a>
                    <div class="profile-icon-name">dribbble</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="single-profile">
                <div class="profile-txt">
                  <a href=""><i class="flaticon-behance-logo"></i></a>
                  <div class="profile-icon-name">behance</div>
                </div>
                <div class="single-profile-overlay">
                  <div class="profile-txt">
                    <a href=""><i class="flaticon-behance-logo"></i></a>
                    <div class="profile-icon-name">behance</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="single-profile profile-no-border">
                <div class="profile-txt">
                  <a href=""><i class="fab fa-github"></i></a>
                  <div class="profile-icon-name">github</div>
                </div>
                <div class="single-profile-overlay">
                  <div class="profile-txt">
                    <a href=""><i class="flaticon-github-logo"></i></a>
                    <div class="profile-icon-name">github</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="profile-border"></div>
          <div class="row">
            <div class="col-sm-3">
              <div class="single-profile">
                <div class="profile-txt">
                  <a href=""><i class="flaticon-flickr-website-logo-silhouette"></i></a>
                  <div class="profile-icon-name">flickR</div>
                </div>
                <div class="single-profile-overlay">
                  <div class="profile-txt">
                    <a href=""><i class="flaticon-flickr-website-logo-silhouette"></i></a>
                    <div class="profile-icon-name">flickR</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="single-profile">
                <div class="profile-txt">
                  <a href=""><i class="flaticon-smug"></i></a>
                  <div class="profile-icon-name">smungMung</div>
                </div>
                <div class="single-profile-overlay">
                  <div class="profile-txt">
                    <a href=""><i class="flaticon-smug"></i></a>
                    <div class="profile-icon-name">smungMung</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="single-profile">
                <div class="profile-txt">
                  <a href=""><i class="flaticon-squarespace-logo"></i></a>
                  <div class="profile-icon-name">squareSpace</div>
                </div>
                <div class="single-profile-overlay">
                  <div class="profile-txt">
                    <a href=""><i class="flaticon-squarespace-logo"></i></a>
                    <div class="profile-icon-name">squareSpace</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="single-profile profile-no-border">
                <div class="profile-txt">
                  <a href=""><i class="flaticon-bitbucket-logotype-camera-lens-in-perspective"></i></a>
                  <div class="profile-icon-name">bitBucket</div>
                </div>
                <div class="single-profile-overlay">
                  <div class="profile-txt">
                    <a href=""><i class="flaticon-bitbucket-logotype-camera-lens-in-perspective"></i></a>
                    <div class="profile-icon-name">bitBucket</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </section> */}

  <section id="education" className="education" style={{ zIndex: 2, color: 'white', position: 'relative', backgroundColor : "#f9fbfd" }}>
    <div className="section-heading text-center">
      <h2>education</h2>
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
                  <h4 className="title">
                  {t('Faculté des Sciences et Techniques')}
                  </h4>
                  <h5>{t('Tanger-Tétouan-Al Hoceima, Maroc')}</h5>
                  <p className="description">
                    {t('Diplome1')}
                  </p>
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
                  <h4 className="title">
                    {t('Faculté des Sciences et Techniques')}
                  </h4>
                  <h5>{t('Tanger-Tétouan-Al Hoceima, Maroc')}</h5>
                  <p className="description">
                  {t('Diplome2')}    </p>
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
                  <h4 className="title">
                     {t('EMSI')}
                  </h4>
                  <h5>{t('Tanger-Tétouan-Al Hoceima, Maroc')}</h5>
                  <p className="description">
                    {t('Diplome3')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </section>


  <section id="skills" className="skills" style={{ textAlign: 'justify',zIndex: 2, position: 'relative', backgroundColor : "#f9fbfd" }}>
      <div className="skill-content">
        <div className="section-heading text-center">
          <h2>{t('Compétences')}</h2>
        </div>
        <section style={{ position: 'relative',backgroundColor : "#f9fbfd"  }}>
                          {/* Skills  */}
                <div style={{ position: 'relative',backgroundColor : "#f9fbfd"  }}>
                    <SkillsComponent />
                </div>
      </section>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="single-skill-content">
                <div className="barWrapper">
                  <span className="progressText">.Net FrameWork</span>
                  <div className="single-progress-txt">
                    <div className="progress ">
                      <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="10" aria-valuemax="100" 
                     
                      style={{width: "80%",
                        height: "100%",
                        backgroundColor: "#427fc4",
                        transition: "width 0.5s ease-in-out"}}
                        >
                      </div>
                    </div>
                    <h3>80%</h3>	
                  </div>
                </div>
                <div className="barWrapper">
                  <span className="progressText">Python Django</span>
                  <div className="single-progress-txt">
                    <div className="progress ">
                       <div className="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="10" aria-valuemax="100" 
                       
                       style={{width: "85%",
                        height: "100%",
                        backgroundColor: "#427fc4",
                        transition: "width 0.5s ease-in-out"}}
                       
                       >
                          
                       </div>
                    </div>
                    <h3>85%</h3>	
                  </div>
                </div>
                <div className="barWrapper">
                  <span className="progressText">Flutter FrameWork</span>
                  <div className="single-progress-txt">
                    <div className="progress ">
                       <div className="progress-bar" role="progressbar" aria-valuenow="97" aria-valuemin="10" aria-valuemax="100" 
                       style={{width: "92%",
                        height: "100%",
                        backgroundColor: "#427fc4",
                        transition: "width 0.5s ease-in-out"}}
                        >
                       </div>
                    </div>
                    <h3>92%</h3>	
                  </div>
                </div>
                <div className="barWrapper">
                  <span className="progressText">NoSql/SQL</span>
                  <div className="single-progress-txt">
                    <div className="progress ">
                       <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="10" aria-valuemax="100"
                        style={{width: "92%",
                          height: "100%",
                          backgroundColor: "#427fc4",
                          transition: "width 0.5s ease-in-out"}}
                          >
                    
                       </div>
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
                    <div className="progress ">
                      <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="10" aria-valuemax="100"
                        style={{width: "95%",
                          height: "100%",
                          backgroundColor: "#427fc4",
                          transition: "width 0.5s ease-in-out"}}
                      >
                  
                      </div>
                    </div>
                    <h3>95%</h3>	
                  </div>
                </div>
                <div className="barWrapper">
                  <span className="progressText">{t('Etude de Cas')}</span>
                  <div className="single-progress-txt">
                    <div className="progress ">
                       <div className="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="10" aria-valuemax="100"                           style={{width: "85%",
                        height: "100%",
                        backgroundColor: "#427fc4",
                        transition: "width 0.5s ease-in-out"}}
                        >
                       </div>
                    </div>
                    <h3>85%</h3>	
                  </div>
                </div>
                <div className="barWrapper">
                  <span className="progressText">communication</span>
                  <div className="single-progress-txt">
                    <div className="progress ">
                       <div className="progress-bar" role="progressbar" aria-valuenow="97" aria-valuemin="10" aria-valuemax="100" 
                       style={{width: "97%",
                        height: "100%",
                        backgroundColor: "#427fc4",
                        transition: "width 0.5s ease-in-out"}}
                        >
                       </div>
                    </div>
                    <h3>97%</h3>	
                  </div>
                </div>
                <div className="barWrapper">
                  <span className="progressText">React</span>
                  <div className="single-progress-txt">
                    <div className="progress ">
                       <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="10" aria-valuemax="100" 
                       style={{width: "79%",
                        height: "100%",
                        backgroundColor: "#427fc4",
                        transition: "width 0.5s ease-in-out"}}
                        >

                       </div>
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
 
  <section id="experience" className="experience" style={{textAlign: 'justify', zIndex: 2, color: 'white', position: 'relative', backgroundColor : "#f9fbfd" }} >
    <div className="section-heading text-center">
      <h2>{t('Expérience')}</h2>
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
                          <h4 className="title" >
                            <span><i className="fa fa-circle" aria-hidden="true"></i></span>
                            Alexsys Solutions
                          </h4>
                          <h5>{t('Rabat, Rabat-Salé-Kénitra, Maroc')}.</h5>
                          <p className="description">
                              {t('ProjetPFELicence')}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
               {/* Experinece 2 */}
              {/* <li>
                <div class="single-timeline-box fix">
                  <div class="row">
                    <div class="col-md-offset-1 col-md-5 experience-time-responsive">
                      <div class="experience-time">
                        <h2>
                          <span><i class="fa fa-circle" aria-hidden="true"></i></span>
                          2016 - 2018
                        </h2>
                        <h3>associate design director</h3>
                      </div>
                    </div>
                    <div class="col-md-5">
                      <div class="timeline">
                        <div class="timeline-content text-right">
                          <h4 class="title">
                            hoplony tech limited
                          </h4>
                          <h5>newyork, USA</h5>
                          <p class="description">
                            Duis aute irure dolor in reprehenderit in vol patate velit esse cillum dolore eu fugiat nulla pari. Excepteur sint occana inna tecat cupidatat non proident. 
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-offset-1 col-md-5 experience-time-main">
                      <div class="experience-time">
                        <h2>
                          <span><i class="fa fa-circle" aria-hidden="true"></i></span>
                          2016 - 2018
                        </h2>
                        <h3>associate design director</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </li> */}
                {/* Experinece 2 */}
              {/* <li>
                <div class="single-timeline-box fix">
                  <div class="row">
                    <div class="col-md-5">
                      <div class="experience-time text-right">
                        <h2>2013 - 2016</h2>
                        <h3>senior UI/UX designer</h3>
                      </div>
                    </div>
                    <div class="col-md-offset-1 col-md-5">
                      <div class="timeline">
                        <div class="timeline-content">
                          <h4 class="title">
                            <span><i class="fa fa-circle" aria-hidden="true"></i></span>
                            hoplony tech limited
                          </h4>
                          <h5>newyork, USA</h5>
                          <p class="description">
                            Duis aute irure dolor in reprehenderit in vol patate velit esse cillum dolore eu fugiat nulla pari. Excepteur sint occana inna tecat cupidatat non proident. 
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li> */}
                {/* Experience 3 */}
              {/* <li>
                <div class="single-timeline-box fix">
                  <div class="row">
                    <div class="col-md-offset-1 col-md-5 experience-time-responsive">
                      <div class="experience-time">
                        <h2>
                          <span><i class="fa fa-circle" aria-hidden="true"></i></span>
                          2012 - 2013
                        </h2>
                        <h3>UI/UX designer</h3>
                      </div>
                    </div>
                    <div class="col-md-5">
                      <div class="timeline">
                        <div class="timeline-content text-right">
                          <h4 class="title">
                            hoplony tech limited
                          </h4>
                          <h5>newyork, USA</h5>
                          <p class="description">
                            Duis aute irure dolor in reprehenderit in vol patate velit esse cillum dolore eu fugiat nulla pari. Excepteur sint occana inna tecat cupidatat non proident. 
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-offset-1 col-md-5 experience-time-main">
                      <div class="experience-time">
                        <h2>
                          <span><i class="fa fa-circle" aria-hidden="true"></i></span>
                          2012 - 2013
                        </h2>
                        <h3>UI/UX designer</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </li> */}
                  {/* Experience 4  */}
              {/* <li>
                <div class="single-timeline-box fix">
                  <div class="row">
                    <div class="col-md-5">
                      <div class="experience-time text-right">
                        <h2>2010 - 2012</h2>
                        <h3>frontend developer</h3>
                      </div>
                    </div>
                    <div class="col-md-offset-1 col-md-5">
                      <div class="timeline">
                        <div class="timeline-content">
                          <h4 class="title">
                            <span><i class="fa fa-circle" aria-hidden="true"></i></span>
                            hoplony tech limited
                          </h4>
                          <h5>newyork, USA</h5>
                          <p class="description">
                            Duis aute irure dolor in reprehenderit in vol patate velit esse cillum dolore eu fugiat nulla pari. Excepteur sint occana inna tecat cupidatat non proident. 
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li> */}

            </ul>
          </div>
        </div>
    </div>

  </section>


  <section id="portfolio" className="portfolio" style={{ zIndex: 2, color: 'white',position: 'relative', backgroundColor : "#f9fbfd" }}>
    <div className="portfolio-details"> 

      <div className="section-heading text-center">
        <h2>{t('Projet')}</h2>
      </div>

      <div className="container" >
        <div className="portfolio-content" >
          <div className="isotope">
            <div className="row">

              <div className="col-sm-4">
                <div className="item">
                  <img src="images/about/projet1.png" alt="portfolioimage"/>
                  <div className="isotope-overlay">
                    <a href="https://github.com/Amal23-Hub/ApplicationWeb-en-Django.git">
                      {t('Application Web en Django')}
                    </a>
                  </div>
                </div>

                <div className="item">
                  <img src="images/portfolio/classroomDjango.png" alt="portfolioimage"/>
                  <div className="isotope-overlay">
                    <a href="https://github.com/Amal23-Hub/ClassroomProject.git">
                      <span>Classroom Project</span>
                    </a>
                  </div>
                </div>

                <div className="item">
                  <img src="images/portfolio/Certificat_React.png" alt="portfolioimage"/>
                  <div className="isotope-overlay">
                    <a href="https://www.coursera.org/account/accomplishments/records/HLZU18TCEDH2">
                      <span>Certification React</span>
                    </a>
                  </div>
                </div>

              </div>

              <div className="col-sm-4">
                <div className="item">
                  <img src="images/portfolio/App_ekram.png" alt="portfolioimage"/>
                  <div className="isotope-overlay">
                    <a href="https://github.com/Amal23-Hub/ekramMobile.git">
                      ekram Application Mobile 
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-sm-4">
                <div className="item">
                  <img src="images/about/projet1.png" alt="portfolioimage"/>
                  <div className="isotope-overlay">
                    <a href="https://github.com/Amal23-Hub/SiteUniversitaire.git">
                      Site Web {t('Universitaire')}
                    </a>
                  </div>
                </div>
                <div className="item">
                  <img src="images/portfolio/Certificat_Postmen.png" alt="portfolioimage"/>
                  <div className="isotope-overlay">
                    <a href="https://github.com/Amal23-Hub/Certification-Postmen.git">
                      Certification Postmen
                    </a>
                  </div>
                </div>

                <div style={styles.container}>
                  <h2>{t('Projets réalisés')}</h2><br/>
                    <div style={{marginLeft:'25%'}}  className='projectsCount'>
                    <h2 style={styles.number}>+{projectsCount}</h2>
                    <div ref={sectionRef} style={styles.progressContainer}>
                    </div>
                    </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

  </section>
 
      
      <section id="contact" className="contact" style={{ textAlign: 'justify',zIndex: 2, color: 'white', position: 'relative' }}>
      <div className="section-heading text-center">
      <h2>{t('Contactez - Moi')}</h2>
    </div>
    <div className="container">
      <div className="contact-content">
        <div className="row">
          <div className="col-md-offset-1 col-md-5 col-sm-6">
            <div className="single-contact-box">
              <div className="contact-form">
              <ContactUs/>
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
                  {/* <div className="single-contact-add-info">
                    <h3>website</h3>
                    <p>www.brownsine.com</p>
                  </div> */}
                </div>
              </div>
              <div className="hm-foot-icon">
                <ul>
                  <li><a href="https://x.com/A86276Amal" aria-label="Twitter"><i className="fab fa-twitter"></i></a></li> 
                  <li><a href="https://github.com/Amal23-Hub" aria-label="GitHub"><i className="fab fa-github" aria-hidden="true"></i></a></li>
                  <li><a href="https://www.linkedin.com/in/amal-chegdali-37a5b9239/" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


</section>

  <footer id="footer-copyright" className="footer-copyright"  style={{ zIndex: 2, position: 'relative' }}>
    <div className="container">
      <div className="hm-footer-copyright text-center">
        <p>
          &copy; copyright <a href="#about"><span style = {{fontWeight:"bold"}}>AmalChegdali</span></a> - {t('Etudiante')}.
        </p>
      </div>
    </div>

    <div id="scroll-Top">
      <div className="return-to-top" onClick={scrollToTop}>
        <i className="fa fa-angle-up" id="scroll-top"></i>
      </div>
    </div>
    
      </footer>

      </div>
      
    
    )}
      </div>
    );
}

//css 
const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',

  },
  progressContainer: {
    marginTop: '200px', // Add some space for scrolling
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#3498db',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
        
  },
  number: {
    fontSize: '48px',
    color: 'white', // Text color inside the circle
    fontWeight: 'bold',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '150px', // Set width for the oval
    height: '100px', // Set height for the oval (making it oval)
    borderRadius: '50px', // Making it an oval (half of the height)
    background: 'linear-gradient(45deg, #1e3c72, #2a5298, #3c8dbc)', // Gradient colors (blue shades)
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)', // Shadow effect
    animation: 'countAnimation 2s ease-out', // Smooth animation
     
    
  },
  maxNumber: {
    fontSize: '24px',
    color: '#7f8c8d',
    marginLeft: '5px',
  },
};


export default App;
