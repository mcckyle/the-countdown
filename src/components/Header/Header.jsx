//Filename: Header.jsx
//Author: Kyle McColgan
//Date: 24 April 2026
//Description: This file contains the Header component for the Countdown React project.

import "./Header.css";

function Header()
{
  return (
    <header className="header">
      <p className="header-eyebrow">Celebration Countdown</p>
        <h1 className="header-title">
          <span className="header-icon" aria-hidden="true">🎉</span>
          Cinco de Mayo Countdown
        </h1>

        <p className="header-subtitle">
          May 5, 2026
        </p>
    </header>
  );
}

export default Header;
