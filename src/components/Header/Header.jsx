//Filename: Header.jsx
//Author: Kyle McColgan
//Date: 15 March 2026
//Description: This file contains the Header component for the Countdown React project.

import "./Header.css";

function Header()
{
  return (
    <header className="header">
      <div className="header-inner">
        <h1 className="header-title">
          <span className="header-icon" aria-hidden="true">🍀</span>
          Saint Patrick's Day
        </h1>

        <p className="header-subtitle">
          March 17, 2026
        </p>
      </div>
    </header>
  );
}

export default Header;
