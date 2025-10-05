import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';
import { Container, Row, Col } from 'reactstrap';
import Logo from '../images/Logo.png';
import Szkic from '../images/Szkic.jpg';


const ContactContainer = styled.div`
  position: relative;
  padding: 6rem 0;
  background-image: url(${Szkic});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;  //
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(247, 248, 250, 0.8);
    z-index: 0;
  }

  .container {
    position: relative;
    z-index: 1;
  }

  h2 {
    font-family: 'Cinzel', serif;
    font-weight: 400;
    font-size: 1.6rem;
    letter-spacing: 4px;
    margin-bottom: 1rem;
    text-align: center;
    color: #676767;
  }

  .contact-form,
  .contact-info {
    text-align: center;
    position: relative;
    z-index: 1;
    color: #676767;
  }

  .contact-form label {
    display: block;
    font-family: 'Cormorant', serif;
    font-weight: 300;
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 0.5rem;
    color: #676767;
  }

  .contact-form input,
  .contact-form textarea {
    width: 100%;
    padding: 0.5rem;
    margin-bottom: 1rem;
    font-size: 1.1rem;
    border: none;
    border-bottom: 2px solid #676767;
    background: transparent;
    color: #676767;

    &:focus {
      outline: none;
      border-bottom: 2px solid #5a5a5a;
    }
  }

  .contact-form button {
    padding: 0.7em 1.3em;
    border: none;
    font-weight: bold;
    letter-spacing: 5px;
    text-transform: uppercase;
    color: #5a5a5a;
    background-color: #fff;
    transition: all 1s;
    font-size: 15px;
    position: relative;
    overflow: hidden;
    outline: 2px solid #5a5a5a;
    font-family: 'Cinzel', serif;
    cursor: pointer;
  }

  .contact-form button:hover {
    color: #fff;
    transform: scale(1.1);
    outline: 2px solid #5a5a5a;
    box-shadow: 4px 5px 17px -4px #5a5a5a;
  }

  .contact-form button::before {
    content: "";
    position: absolute;
    left: -50px;
    top: 0;
    width: 0;
    height: 100%;
    background-color: #5a5a5a;
    transform: skewX(45deg);
    z-index: -1;
    transition: width 1s;
  }

  .contact-form button:hover::before {
    width: 250%;
  }

  .contact-info h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    font-family: 'Cinzel', serif;
    letter-spacing: 6px;
    text-align: center;
    
    color: #676767;
  }

  .contact-info p {
    font-family: 'Cormorant', serif;
    font-size: 1.1rem;
    line-height: 1.5;
    margin-bottom: 0.5rem;
    color: #676767;
  }

  strong {
    color: #676767;
  }

  .logo-wrapper {
    margin-top: 2rem;
    text-align: center;

    img {
      max-width: 180px;
      height: auto;
    }
  }

  .popup {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 1rem;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    z-index: 10;
    font-weight: bold;
  }

  .popup.success {
    color: #207216;
  }

  .popup.error {
    color: #d32f2f;
  }
`;

function Contact() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(null);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  useEffect(() => {
    const handleTouchStart = () => setIsPopupVisible(false);
    window.addEventListener('touchstart', handleTouchStart);
    return () => window.removeEventListener('touchstart', handleTouchStart);
  }, []);

  const sendEmail = async (e) => {
    e.preventDefault();
    if (isSending) return;

    setIsSending(true);

    try {
      await emailjs.sendForm(
        'service_5o9t4p5',
        'template_i8nnxlz',
        form.current,
        '7q_A-MPmCuO_WYMrQ'
      );
      setIsSuccess(true);
      form.current.reset();
    } catch (error) {
      console.error('Error sending email:', error);
      setIsSuccess(false);
    }

    setIsSending(false);
    setIsPopupVisible(true);

    setTimeout(() => {
      setIsPopupVisible(false);
    }, 2000);
  };

  return (
    <ContactContainer>
      <Container>
        <Row>
          <Col md="6">
            <div className="contact-form">
              <h2>NAPISZ DO NAS</h2>
              <form ref={form} onSubmit={sendEmail}>
                <div>
                  <label htmlFor="name">Imię</label>
                  <input type="text" id="name" name="from_name" required />
                </div>
                <div>
                  <label htmlFor="email">E-mail</label>
                  <input type="email" id="email" name="user_email" required />
                </div>
                <div>
                  <label htmlFor="message">Wiadomość</label>
                  <textarea id="message" name="message" required></textarea>
                </div>
                <button type="submit" disabled={isSending}>
                  {isSending ? 'Wysyłanie...' : 'Wyślij'}
                </button>
              </form>
            </div>
          </Col>

          <Col md="6">
            <div className="contact-info">
              <h2>DANE KONTAKTOWE</h2>
              <p><strong>Adres:</strong> ul. Beskidzka 103b, 43-340 Kozy</p>
              <p><strong>Email:</strong> biuro@homehorizon.pl</p>
              <p><strong>Telefon:</strong> +48 695 912 849</p>
            </div>
            <div className="logo-wrapper">
              <img src={Logo} alt="Home Horizon Logo" />
            </div>
          </Col>
        </Row>
      </Container>

      {isPopupVisible && (
        <div className={`popup ${isSuccess ? 'success' : 'error'}`}>
          {isSuccess
            ? 'Wiadomość została wysłana'
            : 'Wystąpił błąd. Spróbuj ponownie.'}
        </div>
      )}
    </ContactContainer>
  );
}

export default Contact;
