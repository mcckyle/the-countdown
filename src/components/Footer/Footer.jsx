//Filename: Footer.jsx
//Author: Kyle McColgan
//Date: 3 April 2026
//Description: This file contains the Footer component for the Countdown React project.

import "./Footer.css";

function Footer()
{
  return (
    <footer className="footer">
      <p className="footer-text">
        Designed in Saint&nbsp;Louis by{" "}
        <span className="footer-accent">Kyle McColgan</span>

        <span className="divider" aria-hidden="true">•</span>

        Built with{" "}
        <span className="footer-accent">React</span> and{" "}
        <span className="footer-accent">Vite</span>

        <span className="divider" aria-hidden="true">•</span>
        <span className="footer-year">{new Date().getFullYear()}</span>
      </p>
    </footer>
  );
}

export default Footer;
