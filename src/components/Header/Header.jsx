//Filename: Header.jsx
//Author: Kyle McColgan
//Date: 4 June 2026
//Description: This file contains the Header component for the Countdown React project.

import "./Header.css";

function Header()
{
  return (
    <header className="header">
      <div className="header-badge">
        June 14, 2026
      </div>
      <h1 className="header-title">Flag Day</h1>
      <p className="header-subtitle">
        A modern countdown honoring the American flag
        and the spirit of celebration.
      </p>
    </header>
  );
}

export default Header;
