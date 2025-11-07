//Filename: Footer.jsx
//Author: Kyle McColgan
//Date: 05 November 2025
//Description: This file contains the Footer component for the React Countdown project.

import "./Footer.css";

function Footer()
{
  return (
    <footer className="footer">
      <p className="footer-text">
        🦃 Crafted with gratitude by{" "}
        <span className="highlight">Kyle McColgan</span> · Built with{" "}
        <span className="highlight">React</span> &{" "}
        <span className="highlight">Vite</span> ·{" "}
        <span className="year">{new Date().getFullYear()}</span>
      </p>
    </footer>
  );
}

export default Footer;
