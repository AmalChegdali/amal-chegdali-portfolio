import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { useTranslation } from 'react-i18next';  

export const ContactUs = () => {
  const form = useRef();
  const { t } = useTranslation();
  
  // Nouvel état pour gérer le chargement
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    // Validation améliorée
    const name = form.current["from_name"].value.trim();
    const email = form.current["from_email"].value.trim();
    const subject = form.current["subject"].value.trim();
    const message = form.current["message"].value.trim();

    // Validation des champs requis
    if (!name || !email || !subject || !message) {
      Swal.fire({
        title: t("Erreur"),
        text: t("Tous les champs doivent être remplis."),
        icon: "error",
        confirmButtonColor: '#427fc4'
      });
      return;
    }

    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Swal.fire({
        title: t("Erreur"),
        text: t("Veuillez entrer une adresse email valide."),
        icon: "error",
        confirmButtonColor: '#427fc4'
      });
      return;
    }

    // Validation de la longueur du message
    if (message.length < 10) {
      Swal.fire({
        title: t("Erreur"),
        text: t("Le message doit contenir au moins 10 caractères."),
        icon: "error",
        confirmButtonColor: '#427fc4'
      });
      return;
    }

    // On commence à charger
    setIsLoading(true);

    emailjs
      .sendForm('service_xaxq1nw', 'template_icytr1n', form.current, {
        publicKey: 'RG4jT9v3ayVpKJ8PE',
      })
      .then(
        (result) => {
          // Vérification de la réponse de la promesse
          setIsLoading(false); // Arrêter le chargement après la réponse

          if (result.status === 200) {
            // Afficher un message de succès
            Swal.fire({
              title: t("Succès"),
              text: t("Message envoyé avec succès"),
              icon: "success",
              confirmButtonColor: '#427fc4',
              timer: 3000
            });

            // Réinitialiser le formulaire
            form.current.reset();
          } else {
            // Afficher un message d'erreur si la réponse ne contient pas de statut 200
            Swal.fire({
              title: "Error",
              text: "Une erreur est survenue, veuillez réessayer",
              icon: "error"
            });
          }
        },
        (error) => {
          // Si une erreur se produit
          setIsLoading(false); // Arrêter le chargement en cas d'erreur
          console.log('FAILED...', error.text);
          Swal.fire({
            title: "Error",
            text: "Une erreur est survenue, veuillez réessayer",
            icon: "error"
          });
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="row">
        <div className="col-sm-6 col-xs-12">
          <div className="form-group required-field">
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder={t('Nom')}
              name="from_name"
            />
            <span className="asterisk-placeholder">*</span>
          </div>
        </div>
        <div className="col-sm-6 col-xs-12">
          <div className="form-group required-field">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Email"
              name="from_email"
            />
            <span className="asterisk-placeholder">*</span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <div className="form-group required-field">
            <input
              type="text"
              className="form-control"
              id="subject"
              placeholder={t("Sujet")}
              name="subject"
            />
            <span className="asterisk-placeholder">*</span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <div className="form-group required-field">
            <textarea
              className="form-control"
              rows="8"
              id="comment"
              placeholder="Message"
              name="message"
            ></textarea>
            <span className="asterisk-placeholder">*</span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <div className="single-contact-btn">
            <input
              className="contact-btn"
              type="submit"
              value={t("Envoyer")}
              style={{
                backgroundColor: '#427fc4',
                color: 'white',
                border: 'none',
                padding: '10px 20px',
                cursor: 'pointer',
                width: '100%',
                height: '50px',
                boxShadow: '0 5px 20px rgba(0,0,0,.2)',
              }}
            />
          </div>
        </div>
      </div>

      {/* Afficher un cercle de chargement pendant l'envoi */}
      {isLoading && (
        <div className="loading-overlay">
          <div className="spinner"></div> {/* Le cercle de chargement */}
        </div>
      )}
    </form>
  );
};
