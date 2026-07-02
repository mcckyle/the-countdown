//Filename: Header.jsx
//Author: Kyle McColgan
//Date: 1 July 2026
//Description: This file contains the Header component for the Countdown React project.

import "./Header.css";

function Header()
{
  return (
    <header className="header">
      <p className="header-eyebrow">July 4, 2026</p>
      <h1 className="header-title">Independence Day</h1>
      <p className="header-subtitle">
        A modern countdown honoring freedom and independence.
      </p>
    </header>
  );
}

export default Header;
