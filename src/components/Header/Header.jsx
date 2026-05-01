//Filename: Header.jsx
//Author: Kyle McColgan
//Date: 30 April 2026
//Description: This file contains the Header component for the Countdown React project.

import "./Header.css";

function Header()
{
  return (
    <header className="header">
      <p className="header-eyebrow">Modern Celebration Countdown</p>
        <h1 className="header-title">
          <span className="header-icon" aria-hidden="true">✨</span>
          Cinco de Mayo
        </h1>

        <p className="header-subtitle">
          Countdown to May 5, 2026
        </p>
    </header>
  );
}

export default Header;
