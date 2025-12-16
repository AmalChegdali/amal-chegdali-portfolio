import React from 'react';
import { useTranslation } from 'react-i18next';

const Profile = () => {
  const { t } = useTranslation();

  const socialLinks = [
    {
      href: 'https://x.com/A86276Amal',
      icon: 'fab fa-twitter',
      label: 'Twitter'
    },
    {
      href: 'https://github.com/AmalChegdali',
      icon: 'fab fa-github',
      label: 'GitHub',
      className: 'iconhover'
    },
    {
      href: 'https://www.linkedin.com/in/amal-chegdali-37a5b9239/',
      icon: 'fab fa-linkedin',
      label: 'LinkedIn'
    }
  ];

  return (
    <section
      id="profiles"
      className="about"
      style={{
        zIndex: 2,
        color: 'white',
        position: 'relative',
        backgroundColor: "#f9fbfd"
      }}
    >
      <div className="section-heading text-center fade-in">
        <h2 className="gradient-text">Profile</h2>
      </div>
      <div className="container">
        <div className="about-content">
          <div className="row">
            <div className="col-sm-6">
              <div className="single-about-txt">
                <h3>{t("TitleStatus")}</h3>
                <p>{t("ProfilePrestantation")}</p>
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
                      <p>a.chegdali@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-offset-1 col-sm-5">
              <div className="single-about-img">
                <img src="images/about/profile_image.png" alt="profile" />
                <div className="about-list-icon">
                  <ul>
                    {socialLinks.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.href}
                          className={link.className}
                          aria-label={link.label}
                        >
                          <i className={link.icon} aria-hidden="true"></i>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;

