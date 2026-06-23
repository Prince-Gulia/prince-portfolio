import React from 'react';
import { personalInfo } from '../data/portfolioData';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-text">
          Designed &amp; Built by <span className="accent">{personalInfo.name}</span> &copy; {new Date().getFullYear()}
        </p>
        <div className="footer-links">
          <a
            href={personalInfo.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            GitHub
          </a>
          <a
            href={personalInfo.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            LinkedIn
          </a>
          <a href={`mailto:${personalInfo.email}`} className="footer-link">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
