//Filename: Footer.jsx
//Author: Kyle McColgan
//Date: 25 October 2025
//Description: This file contains the Footer component for the React Countdown project.

import "./Footer.css";

function Footer()
{
  return (
    <footer className="footer">
      <p className="footer-text">
        👻 Designed by Kyle McColgan. Built with <span className="highlight">React</span> &{" "}
        <span className="highlight">Vite</span> ·{" "}
        <span className="year">{new Date().getFullYear()}</span>
      </p>
    </footer>
  );
}

export default Footer;
