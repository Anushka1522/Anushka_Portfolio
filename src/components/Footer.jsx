// src/components/Footer.jsx

import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import './css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        

 <div className="footer-bottom">
    <p className="connect-text">
           Find me on  social media.
        </p>

        <p>
          &copy; 2025 — Maintained By <span className="highlight">Tech User Anushka Itape</span>
        </p>
      </div>
        <div className="footer-social-icons">
          <a href="https://github.com/Anushka1522" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/anushka-itape-99904b275/" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          {/* <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <FaTwitter />
          </a> */}
          <a href="mailto:anushkaitape152002@gmail.com" target="_blank" rel="noreferrer">
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* <div className="contact-info">
        <p>
          <FaEnvelope />{' '}
          <a href="mailto:anushkaitape152002@gmail.com" target="_blank" rel="noreferrer">
            anushkaitape152002@gmail.com
          </a>
        </p>
        <p>
          <FaLinkedin />{' '}
          <a href="https://www.linkedin.com/in/anushka-itape-99904b275/" target="_blank" rel="noreferrer">
            linkedin.com/in/anushka-itape-99904b275/
          </a>
        </p>
        <p>
          <FaGithub />{' '}
          <a href="https://github.com/Anushka1522" target="_blank" rel="noreferrer">
            github.com/Anushka1522
          </a>
        </p>
      </div> */}

     
    </footer>
  );
};

export default Footer;
