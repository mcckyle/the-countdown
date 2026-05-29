//Filename: Footer.jsx
//Author: Kyle McColgan
//Date: 28 May 2026
//Description: This file contains the Footer component for the Countdown React project.

import "./Footer.css";

function Footer()
{
  return (
    <footer className="footer">
      <div className="footer-line" />
      <p className="footer-text">
        <span className="footer-muted">
          Designed by
        </span>
        <span className="footer-accent">
          <a
            href="https://mcckyle.github.io/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Kyle McColgan's website"
          >
            Kyle McColgan
          </a>
        </span>

        <span className="footer-divider" aria-hidden="true">•</span>

        <span className="footer-muted">
          React + Vite
        </span>

        <span className="footer-divider" aria-hidden="true">•</span>
        <span className="footer-year">{new Date().getFullYear()}</span>
      </p>
    </footer>
  );
}

export default Footer;
