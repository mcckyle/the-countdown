//Filename: Footer.jsx
//Author: Kyle McColgan
//Date: 5 January 2026
//Description: This file contains the Footer component for the React Countdown project.

import "./Footer.css";

function Footer()
{
  return (
    <footer className="footer">
      <p className="footer-text">
        Designed in Saint&nbsp;Louis by{" "}
        <span className="highlight">Kyle McColgan</span>

        <span className="separator" aria-hidden="true">•</span>

        Built with{" "}
        <span className="highlight">React</span> &{" "}
        <span className="highlight">Vite</span>

        <span className="separator" aria-hidden="true">•</span>

        <span className="year">{new Date().getFullYear()}</span>
      </p>
    </footer>
  );
}

export default Footer;
