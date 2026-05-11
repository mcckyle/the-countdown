//Filename: Header.jsx
//Author: Kyle McColgan
//Date: 11 May 2026
//Description: This file contains the Header component for the Countdown React project.

import "./Header.css";

function Header()
{
  return (
    <header className="header">
      <div className="header-badge">
        Memorial Day 2026
      </div>
      <h1 className="header-title">
        <span className="header-star" aria-hidden="true">✦</span>
        Memorial Day
        <span className="header-star" aria-hidden="true">✦</span>
      </h1>

        <p className="header-subtitle">
          A modern countdown honoring remembrance and celebration on May 25, 2026.
        </p>
    </header>
  );
}

export default Header;
