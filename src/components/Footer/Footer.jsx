//Filename: Footer.jsx
//Author: Kyle McColgan
//Date: 1 July 2026
//Description: This file contains the Footer component for the Countdown React project.

import "./Footer.css";

function Footer()
{
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer-text">
        <span>Designed by</span>
        <a
          className="footer-link"
          href="https://mcckyle.github.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Kyle McColgan
        </a>
        <span>React + Vite · {year}</span>
      </p>
    </footer>
  );
}

export default Footer;
