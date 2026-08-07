//Filename: Header.jsx
//Author: Kyle McColgan
//Date: 6 August 2026
//Description: This file contains the Header component for the Countdown React project.

import "./Header.css";

function Header()
{
  return (
    <header className="header" aria-labelledby="countdown-title" aria-describedby="countdown-description">
      <p className="header-eyebrow">September 7, 2026</p>
      <h1 id="countdown-title" className="header-title">Labor Day</h1>
      <p id="countdown-description" className="header-subtitle">
        A modern countdown celebrating the American workforce.
      </p>
    </header>
  );
}

export default Header;
