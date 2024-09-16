// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="#about">Sobre</a>
          <a href="#services">Serviços</a>
          <a href="#contact">Contato</a>
          <a href="#privacy">Política de Privacidade</a>
        </div>
        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="https://placehold.co/24x24?text=F" alt="Facebook" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="https://placehold.co/24x24?text=T" alt="Twitter" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="https://placehold.co/24x24?text=I" alt="Instagram" />
          </a>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Blog. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
