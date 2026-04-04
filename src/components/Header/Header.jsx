//Filename: Header.jsx
//Author: Kyle McColgan
//Date: 3 April 2026
//Description: This file contains the Header component for the Countdown React project.

import "./Header.css";

function Header()
{
  return (
    <header className="header">
      <div className="header-inner">
        <p className="header-eyebrow">Spring Celebration</p>
        <h1 className="header-title">
          <span className="header-icon" aria-hidden="true">✿</span>
          Easter Countdown
        </h1>

        <p className="header-subtitle">
          April 5, 2026
        </p>
      </div>
    </header>
  );
}

export default Header;
