//Filename: Header.jsx
//Author: Kyle McColgan
//Date: 10 April 2026
//Description: This file contains the Header component for the Countdown React project.

import "./Header.css";

function Header()
{
  return (
    <header className="header">
      <p className="header-eyebrow">Environmental Awareness</p>
        <h1 className="header-title">
          <span className="header-icon" aria-hidden="true">🌍</span>
          Earth Day Countdown
        </h1>

        <p className="header-subtitle">
          April 22, 2026
        </p>
    </header>
  );
}

export default Header;
