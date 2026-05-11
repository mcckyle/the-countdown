//Filename: Footer.jsx
//Author: Kyle McColgan
//Date: 11 May 2026
//Description: This file contains the Footer component for the Countdown React project.

import "./Footer.css";

function Footer()
{
  return (
    <footer className="footer">
      <div className="footer-line" />
      <p className="footer-text">
        <span className="footer-muted">
          Designed by{" "}
        </span>
        <span className="footer-accent">
          Kyle McColgan
        </span>

        <span className="footer-divider" aria-hidden="true">•</span>

        <span className="footer-muted">
          Built with React and Vite
        </span>

        <span className="footer-divider" aria-hidden="true">•</span>
        <span className="footer-year">{new Date().getFullYear()}</span>
      </p>
    </footer>
  );
}

export default Footer;
