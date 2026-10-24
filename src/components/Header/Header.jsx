//Filename: Header.jsx
//Author: Kyle McColgan
//Date: 23 October 2026
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
      <p className="header-eyebrow">October 31, 2026</p>
      <h1 id="countdown-title" className="header-title">Halloween</h1>
      <p id="countdown-description" className="header-subtitle">
        Celebrating the ancient traditions of All Hallows' Eve.
      </p>
    </header>
  );
}

export default Header;
