//Filename: Footer.jsx
//Author: Kyle McColgan
//Date: 26 December 2025
//Description: This file contains the Footer component for the React Countdown project.

import "./Footer.css";

function Footer()
{
  return (
    <footer className="footer">
      <p className="footer-text">
        Crafted in Saint Louis by{" "}
        <span className="highlight">Kyle McColgan</span>
        <span className="separator">·</span>
        Built with <span className="highlight">React</span> &{" "}
        <span className="highlight">Vite</span>
        <span className="separator">·</span>
        <span className="year">{new Date().getFullYear()}</span>
      </p>
    </footer>
  );
}

export default Footer;
