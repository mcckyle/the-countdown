//Filename: Header.jsx
//Author: Kyle McColgan
//Date: 1 October 2026
//Description: This file contains the Header component for the Countdown React project.

import "./Header.css";

function Header()
{
  return (
    <header
      className="header"
      aria-labelledby="countdown-title"
      aria-describedby="countdown-description"
    >
      <p className="header-eyebrow">October 12, 2026</p>
      <h1 id="countdown-title" className="header-title">Indigenous Peoples' Day</h1>
      <p id="countdown-description" className="header-subtitle">
        Honoring the first stewards of this land and their enduring heritage
      </p>
    </header>
  );
}

export default Header;
