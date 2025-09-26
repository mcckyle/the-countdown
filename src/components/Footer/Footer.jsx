//Filename: Footer.jsx
//Author: Kyle McColgan
//Date: 25 September 2025
//Description: This file contains the Footer component for the Countdown React project.

import "./Footer.css";

function Footer()
{
  return (
    <footer className="footer">
      <p className="footer-text">
        👻 Built with <span className="highlight">React</span> &{" "}
        <span className="highlight">Vite</span> ·{" "}
        <span className="year">{new Date().getFullYear()}</span>
      </p>
    </footer>
  );
}

export default Footer;
