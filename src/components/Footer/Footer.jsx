//Filename: Footer.jsx
//Author: Kyle McColgan
//Date: 17 June 2026
//Description: This file contains the Footer component for the Countdown React project.

import "./Footer.css";

function Footer()
{
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-line" />
      <p className="footer-text">
        <span className="footer-muted">
          Designed by
        </span>
        <a
          className="footer-link"
          href="https://mcckyle.github.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Kyle McColgan
        </a>

        <span className="footer-divider">•</span>

        <span className="footer-muted">
          React + Vite
        </span>

        <span className="footer-divider">•</span>
        <span className="footer-muted">{year}</span>
      </p>
    </footer>
  );
}

export default Footer;
