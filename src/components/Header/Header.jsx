//Filename: Header.jsx
//Author: Kyle McColgan
//Date: 17 June 2026
//Description: This file contains the Header component for the Countdown React project.

import "./Header.css";

function Header()
{
  return (
    <header className="header">
      <p className="header-date">June 19, 2026</p>
      <h1 className="header-title">Juneteenth</h1>
      <p className="header-subtitle">
        A modern countdown honoring freedom and equality.
      </p>
    </header>
  );
}

export default Header;
