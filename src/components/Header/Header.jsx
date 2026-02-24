//Filename: Header.jsx
//Author: Kyle McColgan
//Date: 23 February 2026
//Description: This file contains the Header component for the React Countdown project.

import "./Header.css";

function Header()
{
  return (
    <header className="header">
      <div className="header-inner">
        <h1 className="header-title">
          <span className="header-icon" aria-hidden="true">☣</span>
          RE9
        </h1>

        <p className="header-subtitle">
          Launch Countdown · February 27, 2026
        </p>
      </div>
    </header>
  );
}

export default Header;
