//Filename: Footer.jsx
//Author: Kyle McColgan
//Date: 14 September 2025
//Description: This file contains the Footer component for the Countdown React project.

import "./Footer.css";

function Footer()
{
    return (
        <footer className="footer">
          <p>👻 Made with React & Vite · {new Date().getFullYear()}</p>
        </footer>
    );
}

export default Footer;
